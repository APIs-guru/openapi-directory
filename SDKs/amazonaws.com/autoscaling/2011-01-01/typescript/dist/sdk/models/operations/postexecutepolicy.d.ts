import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}
export declare enum PostExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostExecutePolicyQueryParams extends SpeakeasyBase {
    action: PostExecutePolicyActionEnum;
    version: PostExecutePolicyVersionEnum;
}
export declare class PostExecutePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExecutePolicyRequest extends SpeakeasyBase {
    queryParams: PostExecutePolicyQueryParams;
    headers: PostExecutePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostExecutePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
