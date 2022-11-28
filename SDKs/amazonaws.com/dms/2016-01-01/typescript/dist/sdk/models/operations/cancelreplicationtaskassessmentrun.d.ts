import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101CancelReplicationTaskAssessmentRun = "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun"
}
export declare class CancelReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class CancelReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    headers: CancelReplicationTaskAssessmentRunHeaders;
    request: shared.CancelReplicationTaskAssessmentRunMessage;
}
export declare class CancelReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    cancelReplicationTaskAssessmentRunResponse?: shared.CancelReplicationTaskAssessmentRunResponse;
    contentType: string;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
