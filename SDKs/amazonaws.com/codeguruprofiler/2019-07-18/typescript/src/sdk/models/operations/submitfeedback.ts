import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anomalyInstanceId" })
  anomalyInstanceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class SubmitFeedbackHeaders extends SpeakeasyBase {
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
}

export enum SubmitFeedbackRequestBodyTypeEnum {
    Positive = "Positive"
,    Negative = "Negative"
}


export class SubmitFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=type" })
  type: SubmitFeedbackRequestBodyTypeEnum;
}


export class SubmitFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubmitFeedbackPathParams;

  @Metadata()
  headers: SubmitFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SubmitFeedbackRequestBody;
}


export class SubmitFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitFeedbackResponse?: Map<string, any>;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
