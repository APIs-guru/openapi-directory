import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostToConnectionPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class PostToConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostToConnectionRequestBody extends SpeakeasyBase {
    data: string;
}
export declare class PostToConnectionRequest extends SpeakeasyBase {
    pathParams: PostToConnectionPathParams;
    headers: PostToConnectionHeaders;
    request: PostToConnectionRequestBody;
}
export declare class PostToConnectionResponse extends SpeakeasyBase {
    contentType: string;
    forbiddenException?: any;
    goneException?: any;
    limitExceededException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
}
