import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolume = "AWSSimbaAPIService_v20180301.CreateVolume"
}
export declare class CreateVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVolumeXAmzTargetEnum;
}
export declare class CreateVolumeRequest extends SpeakeasyBase {
    headers: CreateVolumeHeaders;
    request: shared.CreateVolumeRequest;
}
export declare class CreateVolumeResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    createVolumeResponse?: shared.CreateVolumeResponse;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    missingVolumeConfiguration?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    storageVirtualMachineNotFound?: any;
    unsupportedOperation?: any;
}
