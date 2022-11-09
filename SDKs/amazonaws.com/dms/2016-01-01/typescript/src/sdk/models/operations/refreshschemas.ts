import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RefreshSchemasXAmzTargetEnum {
    AmazonDmSv20160101RefreshSchemas = "AmazonDMSv20160101.RefreshSchemas"
}


export class RefreshSchemasHeaders extends SpeakeasyBase {
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
  xAmzTarget: RefreshSchemasXAmzTargetEnum;
}


export class RefreshSchemasRequest extends SpeakeasyBase {
  @Metadata()
  headers: RefreshSchemasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RefreshSchemasMessage;
}


export class RefreshSchemasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  kmsKeyNotAccessibleFault?: any;

  @Metadata()
  refreshSchemasResponse?: shared.RefreshSchemasResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;
}
