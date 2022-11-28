import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLocationObjectStorageXAmzTargetEnum {
    FmrsServiceUpdateLocationObjectStorage = "FmrsService.UpdateLocationObjectStorage"
}
export declare class UpdateLocationObjectStorageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationObjectStorageXAmzTargetEnum;
}
export declare class UpdateLocationObjectStorageRequest extends SpeakeasyBase {
    headers: UpdateLocationObjectStorageHeaders;
    request: shared.UpdateLocationObjectStorageRequest;
}
export declare class UpdateLocationObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateLocationObjectStorageResponse?: Map<string, any>;
}
