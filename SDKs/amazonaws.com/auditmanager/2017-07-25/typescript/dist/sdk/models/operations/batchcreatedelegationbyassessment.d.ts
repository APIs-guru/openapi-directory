import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchCreateDelegationByAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class BatchCreateDelegationByAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchCreateDelegationByAssessmentRequestBody extends SpeakeasyBase {
    createDelegationRequests: shared.CreateDelegationRequest[];
}
export declare class BatchCreateDelegationByAssessmentRequest extends SpeakeasyBase {
    pathParams: BatchCreateDelegationByAssessmentPathParams;
    headers: BatchCreateDelegationByAssessmentHeaders;
    request: BatchCreateDelegationByAssessmentRequestBody;
}
export declare class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchCreateDelegationByAssessmentResponse?: shared.BatchCreateDelegationByAssessmentResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
