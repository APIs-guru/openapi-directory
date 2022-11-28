import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}
export declare enum PostSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostSetInstanceHealthQueryParams extends SpeakeasyBase {
    action: PostSetInstanceHealthActionEnum;
    version: PostSetInstanceHealthVersionEnum;
}
export declare class PostSetInstanceHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetInstanceHealthRequest extends SpeakeasyBase {
    queryParams: PostSetInstanceHealthQueryParams;
    headers: PostSetInstanceHealthHeaders;
    request?: Uint8Array;
}
export declare class PostSetInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
