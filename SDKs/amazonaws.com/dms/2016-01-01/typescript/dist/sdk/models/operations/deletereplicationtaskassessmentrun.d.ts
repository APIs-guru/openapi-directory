import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationTaskAssessmentRun = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun"
}
export declare class DeleteReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class DeleteReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    headers: DeleteReplicationTaskAssessmentRunHeaders;
    request: shared.DeleteReplicationTaskAssessmentRunMessage;
}
export declare class DeleteReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    deleteReplicationTaskAssessmentRunResponse?: shared.DeleteReplicationTaskAssessmentRunResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
