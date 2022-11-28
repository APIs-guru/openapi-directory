import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLocationNfsXAmzTargetEnum {
    FmrsServiceUpdateLocationNfs = "FmrsService.UpdateLocationNfs"
}
export declare class UpdateLocationNfsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationNfsXAmzTargetEnum;
}
export declare class UpdateLocationNfsRequest extends SpeakeasyBase {
    headers: UpdateLocationNfsHeaders;
    request: shared.UpdateLocationNfsRequest;
}
export declare class UpdateLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateLocationNfsResponse?: Map<string, any>;
}
