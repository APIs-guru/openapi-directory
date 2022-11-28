import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateInstanceEventWindowActionEnum {
    CreateInstanceEventWindow = "CreateInstanceEventWindow"
}
export declare enum PostCreateInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateInstanceEventWindowQueryParams extends SpeakeasyBase {
    action: PostCreateInstanceEventWindowActionEnum;
    version: PostCreateInstanceEventWindowVersionEnum;
}
export declare class PostCreateInstanceEventWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateInstanceEventWindowRequest extends SpeakeasyBase {
    queryParams: PostCreateInstanceEventWindowQueryParams;
    headers: PostCreateInstanceEventWindowHeaders;
    request?: Uint8Array;
}
export declare class PostCreateInstanceEventWindowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
