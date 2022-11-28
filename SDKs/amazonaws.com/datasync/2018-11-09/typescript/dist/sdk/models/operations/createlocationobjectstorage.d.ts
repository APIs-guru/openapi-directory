import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationObjectStorageXAmzTargetEnum {
    FmrsServiceCreateLocationObjectStorage = "FmrsService.CreateLocationObjectStorage"
}
export declare class CreateLocationObjectStorageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationObjectStorageXAmzTargetEnum;
}
export declare class CreateLocationObjectStorageRequest extends SpeakeasyBase {
    headers: CreateLocationObjectStorageHeaders;
    request: shared.CreateLocationObjectStorageRequest;
}
export declare class CreateLocationObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    createLocationObjectStorageResponse?: shared.CreateLocationObjectStorageResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
