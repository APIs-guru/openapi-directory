import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationInstance = "AmazonDMSv20160101.CreateReplicationInstance"
}
export declare class CreateReplicationInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationInstanceXAmzTargetEnum;
}
export declare class CreateReplicationInstanceRequest extends SpeakeasyBase {
    headers: CreateReplicationInstanceHeaders;
    request: shared.CreateReplicationInstanceMessage;
}
export declare class CreateReplicationInstanceResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    createReplicationInstanceResponse?: shared.CreateReplicationInstanceResponse;
    insufficientResourceCapacityFault?: any;
    invalidResourceStateFault?: any;
    invalidSubnet?: any;
    kmsKeyNotAccessibleFault?: any;
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
    storageQuotaExceededFault?: any;
}
