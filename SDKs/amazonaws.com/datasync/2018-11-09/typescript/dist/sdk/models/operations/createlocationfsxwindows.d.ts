import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationFsxWindowsXAmzTargetEnum {
    FmrsServiceCreateLocationFsxWindows = "FmrsService.CreateLocationFsxWindows"
}
export declare class CreateLocationFsxWindowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationFsxWindowsXAmzTargetEnum;
}
export declare class CreateLocationFsxWindowsRequest extends SpeakeasyBase {
    headers: CreateLocationFsxWindowsHeaders;
    request: shared.CreateLocationFsxWindowsRequest;
}
export declare class CreateLocationFsxWindowsResponse extends SpeakeasyBase {
    contentType: string;
    createLocationFsxWindowsResponse?: shared.CreateLocationFsxWindowsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
