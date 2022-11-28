import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101ModifyReplicationTask = "AmazonDMSv20160101.ModifyReplicationTask"
}
export declare class ModifyReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationTaskXAmzTargetEnum;
}
export declare class ModifyReplicationTaskRequest extends SpeakeasyBase {
    headers: ModifyReplicationTaskHeaders;
    request: shared.ModifyReplicationTaskMessage;
}
export declare class ModifyReplicationTaskResponse extends SpeakeasyBase {
    contentType: string;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    modifyReplicationTaskResponse?: shared.ModifyReplicationTaskResponse;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
