import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteParameterGroupXAmzTargetEnum {
    AmazonDaxv3DeleteParameterGroup = "AmazonDAXV3.DeleteParameterGroup"
}
export declare class DeleteParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParameterGroupXAmzTargetEnum;
}
export declare class DeleteParameterGroupRequest extends SpeakeasyBase {
    headers: DeleteParameterGroupHeaders;
    request: shared.DeleteParameterGroupRequest;
}
export declare class DeleteParameterGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteParameterGroupResponse?: shared.DeleteParameterGroupResponse;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
