import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteIndexFieldActionEnum {
    DeleteIndexField = "DeleteIndexField"
}
export declare enum GetDeleteIndexFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDeleteIndexFieldQueryParams extends SpeakeasyBase {
    action: GetDeleteIndexFieldActionEnum;
    domainName: string;
    indexFieldName: string;
    version: GetDeleteIndexFieldVersionEnum;
}
export declare class GetDeleteIndexFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteIndexFieldRequest extends SpeakeasyBase {
    queryParams: GetDeleteIndexFieldQueryParams;
    headers: GetDeleteIndexFieldHeaders;
}
export declare class GetDeleteIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
