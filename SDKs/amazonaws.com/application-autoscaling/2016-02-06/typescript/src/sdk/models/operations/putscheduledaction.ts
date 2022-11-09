import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutScheduledActionXAmzTargetEnum {
    AnyScaleFrontendServicePutScheduledAction = "AnyScaleFrontendService.PutScheduledAction"
}


export class PutScheduledActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutScheduledActionXAmzTargetEnum;
}


export class PutScheduledActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutScheduledActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutScheduledActionRequest;
}


export class PutScheduledActionResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  objectNotFoundException?: any;

  @Metadata()
  putScheduledActionResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
