import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteInstanceEventWindowActionEnum {
    DeleteInstanceEventWindow = "DeleteInstanceEventWindow"
}
export declare enum PostDeleteInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteInstanceEventWindowQueryParams extends SpeakeasyBase {
    action: PostDeleteInstanceEventWindowActionEnum;
    version: PostDeleteInstanceEventWindowVersionEnum;
}
export declare class PostDeleteInstanceEventWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteInstanceEventWindowRequest extends SpeakeasyBase {
    queryParams: PostDeleteInstanceEventWindowQueryParams;
    headers: PostDeleteInstanceEventWindowHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
