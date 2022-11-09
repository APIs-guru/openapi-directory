import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListPolicyTagsActionEnum {
    ListPolicyTags = "ListPolicyTags"
}
export declare enum GetListPolicyTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListPolicyTagsQueryParams extends SpeakeasyBase {
    action: GetListPolicyTagsActionEnum;
    marker?: string;
    maxItems?: number;
    policyArn: string;
    version: GetListPolicyTagsVersionEnum;
}
export declare class GetListPolicyTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListPolicyTagsRequest extends SpeakeasyBase {
    queryParams: GetListPolicyTagsQueryParams;
    headers: GetListPolicyTagsHeaders;
}
export declare class GetListPolicyTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
