import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApplicationXAmzTargetEnum {
    Ec2WindowsBarleyServiceCreateApplication = "EC2WindowsBarleyService.CreateApplication"
}
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: shared.CreateApplicationRequest;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createApplicationResponse?: shared.CreateApplicationResponse;
    internalServerException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagsAlreadyExistException?: any;
    validationException?: any;
}
