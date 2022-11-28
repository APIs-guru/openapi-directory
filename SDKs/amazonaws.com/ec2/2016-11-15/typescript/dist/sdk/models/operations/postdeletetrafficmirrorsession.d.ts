import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTrafficMirrorSessionActionEnum {
    DeleteTrafficMirrorSession = "DeleteTrafficMirrorSession"
}
export declare enum PostDeleteTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTrafficMirrorSessionQueryParams extends SpeakeasyBase {
    action: PostDeleteTrafficMirrorSessionActionEnum;
    version: PostDeleteTrafficMirrorSessionVersionEnum;
}
export declare class PostDeleteTrafficMirrorSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTrafficMirrorSessionRequest extends SpeakeasyBase {
    queryParams: PostDeleteTrafficMirrorSessionQueryParams;
    headers: PostDeleteTrafficMirrorSessionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
