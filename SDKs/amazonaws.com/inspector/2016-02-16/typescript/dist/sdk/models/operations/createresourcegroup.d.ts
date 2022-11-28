import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateResourceGroupXAmzTargetEnum {
    InspectorServiceCreateResourceGroup = "InspectorService.CreateResourceGroup"
}
export declare class CreateResourceGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceGroupXAmzTargetEnum;
}
export declare class CreateResourceGroupRequest extends SpeakeasyBase {
    headers: CreateResourceGroupHeaders;
    request: shared.CreateResourceGroupRequest;
}
export declare class CreateResourceGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createResourceGroupResponse?: shared.CreateResourceGroupResponse;
    internalException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
