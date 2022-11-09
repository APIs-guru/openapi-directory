import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyReplicationSubnetGroupXAmzTargetEnum {
    AmazonDmSv20160101ModifyReplicationSubnetGroup = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"
}
export declare class ModifyReplicationSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationSubnetGroupXAmzTargetEnum;
}
export declare class ModifyReplicationSubnetGroupRequest extends SpeakeasyBase {
    headers: ModifyReplicationSubnetGroupHeaders;
    request: shared.ModifyReplicationSubnetGroupMessage;
}
export declare class ModifyReplicationSubnetGroupResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidSubnet?: any;
    modifyReplicationSubnetGroupResponse?: shared.ModifyReplicationSubnetGroupResponse;
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    statusCode: number;
    subnetAlreadyInUse?: any;
}
