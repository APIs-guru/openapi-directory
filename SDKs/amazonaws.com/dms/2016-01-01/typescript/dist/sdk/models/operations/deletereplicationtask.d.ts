import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationTask = "AmazonDMSv20160101.DeleteReplicationTask"
}
export declare class DeleteReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationTaskXAmzTargetEnum;
}
export declare class DeleteReplicationTaskRequest extends SpeakeasyBase {
    headers: DeleteReplicationTaskHeaders;
    request: shared.DeleteReplicationTaskMessage;
}
export declare class DeleteReplicationTaskResponse extends SpeakeasyBase {
    contentType: string;
    deleteReplicationTaskResponse?: shared.DeleteReplicationTaskResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
