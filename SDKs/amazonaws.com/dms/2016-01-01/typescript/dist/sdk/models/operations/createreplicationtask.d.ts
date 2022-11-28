import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationTask = "AmazonDMSv20160101.CreateReplicationTask"
}
export declare class CreateReplicationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationTaskXAmzTargetEnum;
}
export declare class CreateReplicationTaskRequest extends SpeakeasyBase {
    headers: CreateReplicationTaskHeaders;
    request: shared.CreateReplicationTaskMessage;
}
export declare class CreateReplicationTaskResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    createReplicationTaskResponse?: shared.CreateReplicationTaskResponse;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
}
