import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006RegisterOnPremisesInstance = "CodeDeploy_20141006.RegisterOnPremisesInstance"
}
export declare class RegisterOnPremisesInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterOnPremisesInstanceXAmzTargetEnum;
}
export declare class RegisterOnPremisesInstanceRequest extends SpeakeasyBase {
    headers: RegisterOnPremisesInstanceHeaders;
    request: shared.RegisterOnPremisesInstanceInput;
}
export declare class RegisterOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    iamArnRequiredException?: any;
    iamSessionArnAlreadyRegisteredException?: any;
    iamUserArnAlreadyRegisteredException?: any;
    iamUserArnRequiredException?: any;
    instanceNameAlreadyRegisteredException?: any;
    instanceNameRequiredException?: any;
    invalidIamSessionArnException?: any;
    invalidIamUserArnException?: any;
    invalidInstanceNameException?: any;
    multipleIamArnsProvidedException?: any;
    statusCode: number;
}
