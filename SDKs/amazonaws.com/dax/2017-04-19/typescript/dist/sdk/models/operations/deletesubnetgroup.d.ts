import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSubnetGroupXAmzTargetEnum {
    AmazonDaxv3DeleteSubnetGroup = "AmazonDAXV3.DeleteSubnetGroup"
}
export declare class DeleteSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubnetGroupXAmzTargetEnum;
}
export declare class DeleteSubnetGroupRequest extends SpeakeasyBase {
    headers: DeleteSubnetGroupHeaders;
    request: shared.DeleteSubnetGroupRequest;
}
export declare class DeleteSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteSubnetGroupResponse?: shared.DeleteSubnetGroupResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    subnetGroupInUseFault?: any;
    subnetGroupNotFoundFault?: any;
}
