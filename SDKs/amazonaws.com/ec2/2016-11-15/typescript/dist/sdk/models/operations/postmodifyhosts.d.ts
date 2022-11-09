import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyHostsActionEnum {
    ModifyHosts = "ModifyHosts"
}
export declare enum PostModifyHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyHostsQueryParams extends SpeakeasyBase {
    action: PostModifyHostsActionEnum;
    version: PostModifyHostsVersionEnum;
}
export declare class PostModifyHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyHostsRequest extends SpeakeasyBase {
    queryParams: PostModifyHostsQueryParams;
    headers: PostModifyHostsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
