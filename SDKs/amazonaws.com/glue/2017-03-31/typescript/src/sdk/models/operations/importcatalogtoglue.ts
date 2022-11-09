import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportCatalogToGlueXAmzTargetEnum {
    AwsGlueImportCatalogToGlue = "AWSGlue.ImportCatalogToGlue"
}


export class ImportCatalogToGlueHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ImportCatalogToGlueXAmzTargetEnum;
}


export class ImportCatalogToGlueRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportCatalogToGlueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportCatalogToGlueRequest;
}


export class ImportCatalogToGlueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importCatalogToGlueResponse?: Map<string, any>;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
