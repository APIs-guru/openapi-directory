import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribePoliciesActionEnum {
    DescribePolicies = "DescribePolicies"
}
export declare enum PostDescribePoliciesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribePoliciesQueryParams extends SpeakeasyBase {
    action: PostDescribePoliciesActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribePoliciesVersionEnum;
}
export declare class PostDescribePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePoliciesRequest extends SpeakeasyBase {
    queryParams: PostDescribePoliciesQueryParams;
    headers: PostDescribePoliciesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
