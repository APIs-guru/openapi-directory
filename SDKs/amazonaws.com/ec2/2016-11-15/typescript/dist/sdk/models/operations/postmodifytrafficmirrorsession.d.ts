import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyTrafficMirrorSessionActionEnum {
    ModifyTrafficMirrorSession = "ModifyTrafficMirrorSession"
}
export declare enum PostModifyTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTrafficMirrorSessionQueryParams extends SpeakeasyBase {
    action: PostModifyTrafficMirrorSessionActionEnum;
    version: PostModifyTrafficMirrorSessionVersionEnum;
}
export declare class PostModifyTrafficMirrorSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
    queryParams: PostModifyTrafficMirrorSessionQueryParams;
    headers: PostModifyTrafficMirrorSessionHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
