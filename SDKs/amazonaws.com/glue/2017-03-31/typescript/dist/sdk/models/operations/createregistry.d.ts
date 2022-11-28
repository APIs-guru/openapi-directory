import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRegistryXAmzTargetEnum {
    AwsGlueCreateRegistry = "AWSGlue.CreateRegistry"
}
export declare class CreateRegistryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRegistryXAmzTargetEnum;
}
export declare class CreateRegistryRequest extends SpeakeasyBase {
    headers: CreateRegistryHeaders;
    request: shared.CreateRegistryInput;
}
export declare class CreateRegistryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    alreadyExistsException?: any;
    contentType: string;
    createRegistryResponse?: shared.CreateRegistryResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
