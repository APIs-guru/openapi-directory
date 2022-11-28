import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLocationS3XAmzTargetEnum {
    FmrsServiceCreateLocationS3 = "FmrsService.CreateLocationS3"
}
export declare class CreateLocationS3Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationS3XAmzTargetEnum;
}
export declare class CreateLocationS3Request extends SpeakeasyBase {
    headers: CreateLocationS3Headers;
    request: shared.CreateLocationS3Request;
}
export declare class CreateLocationS3Response extends SpeakeasyBase {
    contentType: string;
    createLocationS3Response?: shared.CreateLocationS3Response;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
