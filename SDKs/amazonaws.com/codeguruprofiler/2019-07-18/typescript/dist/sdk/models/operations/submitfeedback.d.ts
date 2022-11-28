import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubmitFeedbackPathParams extends SpeakeasyBase {
    anomalyInstanceId: string;
    profilingGroupName: string;
}
export declare class SubmitFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum SubmitFeedbackRequestBodyTypeEnum {
    Positive = "Positive",
    Negative = "Negative"
}
export declare class SubmitFeedbackRequestBody extends SpeakeasyBase {
    comment?: string;
    type: SubmitFeedbackRequestBodyTypeEnum;
}
export declare class SubmitFeedbackRequest extends SpeakeasyBase {
    pathParams: SubmitFeedbackPathParams;
    headers: SubmitFeedbackHeaders;
    request: SubmitFeedbackRequestBody;
}
export declare class SubmitFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    submitFeedbackResponse?: Map<string, any>;
    throttlingException?: any;
    validationException?: any;
}
