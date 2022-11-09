import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}
export declare enum PostSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostSetInstanceProtectionQueryParams extends SpeakeasyBase {
    action: PostSetInstanceProtectionActionEnum;
    version: PostSetInstanceProtectionVersionEnum;
}
export declare class PostSetInstanceProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetInstanceProtectionRequest extends SpeakeasyBase {
    queryParams: PostSetInstanceProtectionQueryParams;
    headers: PostSetInstanceProtectionHeaders;
    request?: Uint8Array;
}
export declare class PostSetInstanceProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
