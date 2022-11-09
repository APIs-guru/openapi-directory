import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateServiceAccessPoliciesActionEnum {
    UpdateServiceAccessPolicies = "UpdateServiceAccessPolicies"
}
export declare enum GetUpdateServiceAccessPoliciesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetUpdateServiceAccessPoliciesQueryParams extends SpeakeasyBase {
    accessPolicies: string;
    action: GetUpdateServiceAccessPoliciesActionEnum;
    domainName: string;
    version: GetUpdateServiceAccessPoliciesVersionEnum;
}
export declare class GetUpdateServiceAccessPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateServiceAccessPoliciesRequest extends SpeakeasyBase {
    queryParams: GetUpdateServiceAccessPoliciesQueryParams;
    headers: GetUpdateServiceAccessPoliciesHeaders;
}
export declare class GetUpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
