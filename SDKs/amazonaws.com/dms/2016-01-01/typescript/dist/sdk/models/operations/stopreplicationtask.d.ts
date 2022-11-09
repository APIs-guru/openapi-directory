import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101StopReplicationTask = "AmazonDMSv20160101.StopReplicationTask"
}
export declare class StopReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopReplicationTaskXAmzTargetEnum;
}
export declare class StopReplicationTaskRequest extends SpeakeasyBase {
    headers: StopReplicationTaskHeaders;
    request: shared.StopReplicationTaskMessage;
}
export declare class StopReplicationTaskResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
    stopReplicationTaskResponse?: shared.StopReplicationTaskResponse;
}
