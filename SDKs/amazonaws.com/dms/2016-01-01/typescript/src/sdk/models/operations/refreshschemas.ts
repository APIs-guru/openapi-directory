import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RefreshSchemasXAmzTargetEnum {
    AmazonDmSv20160101RefreshSchemas = "AmazonDMSv20160101.RefreshSchemas"
}


export class RefreshSchemasHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RefreshSchemasXAmzTargetEnum;
}


export class RefreshSchemasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RefreshSchemasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RefreshSchemasMessage;
}


export class RefreshSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  kmsKeyNotAccessibleFault?: any;

  @SpeakeasyMetadata()
  refreshSchemasResponse?: shared.RefreshSchemasResponse;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  resourceQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
