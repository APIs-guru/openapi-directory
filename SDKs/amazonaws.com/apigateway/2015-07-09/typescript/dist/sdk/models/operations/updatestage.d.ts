import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateStagePathParams extends SpeakeasyBase {
    restapiId: string;
    stageName: string;
}
export declare class UpdateStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    pathParams: UpdateStagePathParams;
    headers: UpdateStageHeaders;
    request: UpdateStageRequestBody;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    stage?: shared.Stage;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
