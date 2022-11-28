import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartReplicationTaskAssessmentXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTaskAssessment = "AmazonDMSv20160101.StartReplicationTaskAssessment"
}
export declare class StartReplicationTaskAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskAssessmentXAmzTargetEnum;
}
export declare class StartReplicationTaskAssessmentRequest extends SpeakeasyBase {
    headers: StartReplicationTaskAssessmentHeaders;
    request: shared.StartReplicationTaskAssessmentMessage;
}
export declare class StartReplicationTaskAssessmentResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    startReplicationTaskAssessmentResponse?: shared.StartReplicationTaskAssessmentResponse;
    statusCode: number;
}
