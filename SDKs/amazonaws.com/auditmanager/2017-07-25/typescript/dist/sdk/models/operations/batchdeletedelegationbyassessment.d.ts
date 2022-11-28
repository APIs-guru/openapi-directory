import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDeleteDelegationByAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class BatchDeleteDelegationByAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteDelegationByAssessmentRequestBody extends SpeakeasyBase {
    delegationIds: string[];
}
export declare class BatchDeleteDelegationByAssessmentRequest extends SpeakeasyBase {
    pathParams: BatchDeleteDelegationByAssessmentPathParams;
    headers: BatchDeleteDelegationByAssessmentHeaders;
    request: BatchDeleteDelegationByAssessmentRequestBody;
}
export declare class BatchDeleteDelegationByAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDeleteDelegationByAssessmentResponse?: shared.BatchDeleteDelegationByAssessmentResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
