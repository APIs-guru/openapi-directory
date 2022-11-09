import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDataCatalogXAmzTargetEnum {
    AmazonAthenaGetDataCatalog = "AmazonAthena.GetDataCatalog"
}


export class GetDataCatalogHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDataCatalogXAmzTargetEnum;
}


export class GetDataCatalogRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDataCatalogHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDataCatalogInput;
}


export class GetDataCatalogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDataCatalogOutput?: shared.GetDataCatalogOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
