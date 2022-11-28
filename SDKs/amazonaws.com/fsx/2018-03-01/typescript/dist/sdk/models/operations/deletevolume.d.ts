import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteVolume = "AWSSimbaAPIService_v20180301.DeleteVolume"
}
export declare class DeleteVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVolumeXAmzTargetEnum;
}
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    headers: DeleteVolumeHeaders;
    request: shared.DeleteVolumeRequest;
}
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    deleteVolumeResponse?: shared.DeleteVolumeResponse;
    incompatibleParameterError?: any;
    internalServerError?: any;
    statusCode: number;
    volumeNotFound?: any;
}
