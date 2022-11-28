import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTrafficMirrorSessionActionEnum {
    CreateTrafficMirrorSession = "CreateTrafficMirrorSession"
}
export declare enum PostCreateTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTrafficMirrorSessionQueryParams extends SpeakeasyBase {
    action: PostCreateTrafficMirrorSessionActionEnum;
    version: PostCreateTrafficMirrorSessionVersionEnum;
}
export declare class PostCreateTrafficMirrorSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTrafficMirrorSessionRequest extends SpeakeasyBase {
    queryParams: PostCreateTrafficMirrorSessionQueryParams;
    headers: PostCreateTrafficMirrorSessionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
