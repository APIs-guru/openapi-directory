import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateReplicationSubnetGroupXAmzTargetEnum {
    AmazonDmSv20160101CreateReplicationSubnetGroup = "AmazonDMSv20160101.CreateReplicationSubnetGroup"
}
export declare class CreateReplicationSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationSubnetGroupXAmzTargetEnum;
}
export declare class CreateReplicationSubnetGroupRequest extends SpeakeasyBase {
    headers: CreateReplicationSubnetGroupHeaders;
    request: shared.CreateReplicationSubnetGroupMessage;
}
export declare class CreateReplicationSubnetGroupResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    createReplicationSubnetGroupResponse?: shared.CreateReplicationSubnetGroupResponse;
    invalidSubnet?: any;
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
}
