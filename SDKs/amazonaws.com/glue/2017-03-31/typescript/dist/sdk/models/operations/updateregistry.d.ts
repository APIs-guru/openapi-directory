import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRegistryXAmzTargetEnum {
    AwsGlueUpdateRegistry = "AWSGlue.UpdateRegistry"
}
export declare class UpdateRegistryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRegistryXAmzTargetEnum;
}
export declare class UpdateRegistryRequest extends SpeakeasyBase {
    headers: UpdateRegistryHeaders;
    request: shared.UpdateRegistryInput;
}
export declare class UpdateRegistryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
    updateRegistryResponse?: shared.UpdateRegistryResponse;
}
