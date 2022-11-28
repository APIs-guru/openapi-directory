import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLocationSmbXAmzTargetEnum {
    FmrsServiceUpdateLocationSmb = "FmrsService.UpdateLocationSmb"
}
export declare class UpdateLocationSmbHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationSmbXAmzTargetEnum;
}
export declare class UpdateLocationSmbRequest extends SpeakeasyBase {
    headers: UpdateLocationSmbHeaders;
    request: shared.UpdateLocationSmbRequest;
}
export declare class UpdateLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateLocationSmbResponse?: Map<string, any>;
}
