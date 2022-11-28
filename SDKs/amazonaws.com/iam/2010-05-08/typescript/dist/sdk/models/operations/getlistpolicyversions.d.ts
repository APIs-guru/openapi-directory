import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListPolicyVersionsActionEnum {
    ListPolicyVersions = "ListPolicyVersions"
}
export declare enum GetListPolicyVersionsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListPolicyVersionsQueryParams extends SpeakeasyBase {
    action: GetListPolicyVersionsActionEnum;
    marker?: string;
    maxItems?: number;
    policyArn: string;
    version: GetListPolicyVersionsVersionEnum;
}
export declare class GetListPolicyVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListPolicyVersionsRequest extends SpeakeasyBase {
    queryParams: GetListPolicyVersionsQueryParams;
    headers: GetListPolicyVersionsHeaders;
}
export declare class GetListPolicyVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
