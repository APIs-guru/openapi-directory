import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteReplicationSubnetGroupXAmzTargetEnum {
    AmazonDmSv20160101DeleteReplicationSubnetGroup = "AmazonDMSv20160101.DeleteReplicationSubnetGroup"
}
export declare class DeleteReplicationSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationSubnetGroupXAmzTargetEnum;
}
export declare class DeleteReplicationSubnetGroupRequest extends SpeakeasyBase {
    headers: DeleteReplicationSubnetGroupHeaders;
    request: shared.DeleteReplicationSubnetGroupMessage;
}
export declare class DeleteReplicationSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteReplicationSubnetGroupResponse?: Map<string, any>;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
