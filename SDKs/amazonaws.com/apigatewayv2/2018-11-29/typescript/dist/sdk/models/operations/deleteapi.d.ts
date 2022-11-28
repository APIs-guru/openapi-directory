import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApiRequest extends SpeakeasyBase {
    pathParams: DeleteApiPathParams;
    headers: DeleteApiHeaders;
}
export declare class DeleteApiResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
