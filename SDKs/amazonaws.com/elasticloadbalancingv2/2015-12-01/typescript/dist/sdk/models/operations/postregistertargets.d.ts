import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRegisterTargetsActionEnum {
    RegisterTargets = "RegisterTargets"
}
export declare enum PostRegisterTargetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostRegisterTargetsQueryParams extends SpeakeasyBase {
    action: PostRegisterTargetsActionEnum;
    version: PostRegisterTargetsVersionEnum;
}
export declare class PostRegisterTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterTargetsRequest extends SpeakeasyBase {
    queryParams: PostRegisterTargetsQueryParams;
    headers: PostRegisterTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
