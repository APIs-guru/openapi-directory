import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRegistryXAmzTargetEnum {
    AwsGlueDeleteRegistry = "AWSGlue.DeleteRegistry"
}
export declare class DeleteRegistryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegistryXAmzTargetEnum;
}
export declare class DeleteRegistryRequest extends SpeakeasyBase {
    headers: DeleteRegistryHeaders;
    request: shared.DeleteRegistryInput;
}
export declare class DeleteRegistryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteRegistryResponse?: shared.DeleteRegistryResponse;
    entityNotFoundException?: any;
    invalidInputException?: any;
    statusCode: number;
}
