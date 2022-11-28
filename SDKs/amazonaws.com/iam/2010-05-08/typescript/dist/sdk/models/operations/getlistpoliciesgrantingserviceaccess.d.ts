import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListPoliciesGrantingServiceAccessActionEnum {
    ListPoliciesGrantingServiceAccess = "ListPoliciesGrantingServiceAccess"
}
export declare enum GetListPoliciesGrantingServiceAccessVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListPoliciesGrantingServiceAccessQueryParams extends SpeakeasyBase {
    action: GetListPoliciesGrantingServiceAccessActionEnum;
    arn: string;
    marker?: string;
    serviceNamespaces: string[];
    version: GetListPoliciesGrantingServiceAccessVersionEnum;
}
export declare class GetListPoliciesGrantingServiceAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListPoliciesGrantingServiceAccessRequest extends SpeakeasyBase {
    queryParams: GetListPoliciesGrantingServiceAccessQueryParams;
    headers: GetListPoliciesGrantingServiceAccessHeaders;
}
export declare class GetListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
