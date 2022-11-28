import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStagePathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class GetStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStageRequest extends SpeakeasyBase {
    pathParams: GetStagePathParams;
    headers: GetStageHeaders;
}
export declare class GetStageResponse extends SpeakeasyBase {
    contentType: string;
    getStageResponse?: shared.GetStageResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
