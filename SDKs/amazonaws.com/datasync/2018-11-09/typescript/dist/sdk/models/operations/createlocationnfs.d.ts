import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationNfsXAmzTargetEnum {
    FmrsServiceCreateLocationNfs = "FmrsService.CreateLocationNfs"
}
export declare class CreateLocationNfsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationNfsXAmzTargetEnum;
}
export declare class CreateLocationNfsRequest extends SpeakeasyBase {
    headers: CreateLocationNfsHeaders;
    request: shared.CreateLocationNfsRequest;
}
export declare class CreateLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    createLocationNfsResponse?: shared.CreateLocationNfsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
