import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationSmbXAmzTargetEnum {
    FmrsServiceCreateLocationSmb = "FmrsService.CreateLocationSmb"
}
export declare class CreateLocationSmbHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationSmbXAmzTargetEnum;
}
export declare class CreateLocationSmbRequest extends SpeakeasyBase {
    headers: CreateLocationSmbHeaders;
    request: shared.CreateLocationSmbRequest;
}
export declare class CreateLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
    createLocationSmbResponse?: shared.CreateLocationSmbResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
