import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateStackXAmzTargetEnum {
    PhotonAdminProxyServiceCreateStack = "PhotonAdminProxyService.CreateStack"
}
export declare class CreateStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStackXAmzTargetEnum;
}
export declare class CreateStackRequest extends SpeakeasyBase {
    headers: CreateStackHeaders;
    request: shared.CreateStackRequest;
}
export declare class CreateStackResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createStackResult?: shared.CreateStackResult;
    invalidAccountStatusException?: any;
    invalidParameterCombinationException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
