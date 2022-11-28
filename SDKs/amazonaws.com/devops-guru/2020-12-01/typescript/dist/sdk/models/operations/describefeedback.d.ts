import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFeedbackRequestBody extends SpeakeasyBase {
    insightId?: string;
}
export declare class DescribeFeedbackRequest extends SpeakeasyBase {
    headers: DescribeFeedbackHeaders;
    request: DescribeFeedbackRequestBody;
}
export declare class DescribeFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeFeedbackResponse?: shared.DescribeFeedbackResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
