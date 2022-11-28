import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateVolume = "AWSSimbaAPIService_v20180301.UpdateVolume"
}
export declare class UpdateVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVolumeXAmzTargetEnum;
}
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    headers: UpdateVolumeHeaders;
    request: shared.UpdateVolumeRequest;
}
export declare class UpdateVolumeResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    incompatibleParameterError?: any;
    internalServerError?: any;
    missingVolumeConfiguration?: any;
    statusCode: number;
    updateVolumeResponse?: shared.UpdateVolumeResponse;
    volumeNotFound?: any;
}
