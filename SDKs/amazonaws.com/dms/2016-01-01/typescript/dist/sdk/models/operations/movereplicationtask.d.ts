import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MoveReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101MoveReplicationTask = "AmazonDMSv20160101.MoveReplicationTask"
}
export declare class MoveReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MoveReplicationTaskXAmzTargetEnum;
}
export declare class MoveReplicationTaskRequest extends SpeakeasyBase {
    headers: MoveReplicationTaskHeaders;
    request: shared.MoveReplicationTaskMessage;
}
export declare class MoveReplicationTaskResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    moveReplicationTaskResponse?: shared.MoveReplicationTaskResponse;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
}
