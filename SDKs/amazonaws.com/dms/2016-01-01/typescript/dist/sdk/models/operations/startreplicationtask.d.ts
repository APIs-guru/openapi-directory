import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTask = "AmazonDMSv20160101.StartReplicationTask"
}
export declare class StartReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskXAmzTargetEnum;
}
export declare class StartReplicationTaskRequest extends SpeakeasyBase {
    headers: StartReplicationTaskHeaders;
    request: shared.StartReplicationTaskMessage;
}
export declare class StartReplicationTaskResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    startReplicationTaskResponse?: shared.StartReplicationTaskResponse;
    statusCode: number;
}
