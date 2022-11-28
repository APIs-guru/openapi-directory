import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateDefaultSearchFieldActionEnum {
    UpdateDefaultSearchField = "UpdateDefaultSearchField"
}
export declare enum GetUpdateDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetUpdateDefaultSearchFieldQueryParams extends SpeakeasyBase {
    action: GetUpdateDefaultSearchFieldActionEnum;
    defaultSearchField: string;
    domainName: string;
    version: GetUpdateDefaultSearchFieldVersionEnum;
}
export declare class GetUpdateDefaultSearchFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateDefaultSearchFieldRequest extends SpeakeasyBase {
    queryParams: GetUpdateDefaultSearchFieldQueryParams;
    headers: GetUpdateDefaultSearchFieldHeaders;
}
export declare class GetUpdateDefaultSearchFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
