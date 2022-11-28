import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessmentRun = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"
}
export declare class StartReplicationTaskAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class StartReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    headers: StartReplicationTaskAssessmentRunHeaders;
    request: shared.StartReplicationTaskAssessmentRunMessage;
}
export declare class StartReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidResourceStateFault?: any;
    kmsAccessDeniedFault?: any;
    kmsDisabledFault?: any;
    kmsFault?: any;
    kmsInvalidStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    kmsNotFoundFault?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    s3AccessDeniedFault?: any;
    s3ResourceNotFoundFault?: any;
    startReplicationTaskAssessmentRunResponse?: shared.StartReplicationTaskAssessmentRunResponse;
    statusCode: number;
}
