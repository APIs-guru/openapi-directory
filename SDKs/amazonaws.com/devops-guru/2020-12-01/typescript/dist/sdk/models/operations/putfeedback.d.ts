import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Information about insight feedback received from a customer.
**/
export declare class PutFeedbackRequestBodyInsightFeedback extends SpeakeasyBase {
    feedback?: shared.InsightFeedbackOptionEnum;
    id?: string;
}
export declare class PutFeedbackRequestBody extends SpeakeasyBase {
    insightFeedback?: PutFeedbackRequestBodyInsightFeedback;
}
export declare class PutFeedbackRequest extends SpeakeasyBase {
    headers: PutFeedbackHeaders;
    request: PutFeedbackRequestBody;
}
export declare class PutFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putFeedbackResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
