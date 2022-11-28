import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteFleetsActionEnum {
    DeleteFleets = "DeleteFleets"
}
export declare enum PostDeleteFleetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteFleetsQueryParams extends SpeakeasyBase {
    action: PostDeleteFleetsActionEnum;
    version: PostDeleteFleetsVersionEnum;
}
export declare class PostDeleteFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteFleetsRequest extends SpeakeasyBase {
    queryParams: PostDeleteFleetsQueryParams;
    headers: PostDeleteFleetsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteFleetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
