import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationEfsXAmzTargetEnum {
    FmrsServiceCreateLocationEfs = "FmrsService.CreateLocationEfs"
}
export declare class CreateLocationEfsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationEfsXAmzTargetEnum;
}
export declare class CreateLocationEfsRequest extends SpeakeasyBase {
    headers: CreateLocationEfsHeaders;
    request: shared.CreateLocationEfsRequest;
}
export declare class CreateLocationEfsResponse extends SpeakeasyBase {
    contentType: string;
    createLocationEfsResponse?: shared.CreateLocationEfsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
