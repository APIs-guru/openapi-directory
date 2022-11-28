import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStagePathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class DeleteStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStageRequest extends SpeakeasyBase {
    pathParams: DeleteStagePathParams;
    headers: DeleteStageHeaders;
}
export declare class DeleteStageResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
