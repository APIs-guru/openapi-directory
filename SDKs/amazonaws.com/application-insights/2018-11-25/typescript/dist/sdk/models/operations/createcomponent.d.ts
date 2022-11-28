import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateComponent = "EC2WindowsBarleyService.CreateComponent"
}
export declare class CreateComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateComponentXAmzTargetEnum;
}
export declare class CreateComponentRequest extends SpeakeasyBase {
    headers: CreateComponentHeaders;
    request: shared.CreateComponentRequest;
}
export declare class CreateComponentResponse extends SpeakeasyBase {
    contentType: string;
    createComponentResponse?: Map<string, any>;
    internalServerException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
