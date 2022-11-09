import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSubscriberXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateSubscriber = "AWSBudgetServiceGateway.CreateSubscriber"
}


export class CreateSubscriberHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateSubscriberXAmzTargetEnum;
}


export class CreateSubscriberRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSubscriberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSubscriberRequest;
}


export class CreateSubscriberResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSubscriberResponse?: Map<string, any>;

  @Metadata()
  creationLimitExceededException?: any;

  @Metadata()
  duplicateRecordException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
