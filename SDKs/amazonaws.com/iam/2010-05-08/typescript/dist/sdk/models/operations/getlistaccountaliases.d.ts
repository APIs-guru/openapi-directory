import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListAccountAliasesActionEnum {
    ListAccountAliases = "ListAccountAliases"
}
export declare enum GetListAccountAliasesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListAccountAliasesQueryParams extends SpeakeasyBase {
    action: GetListAccountAliasesActionEnum;
    marker?: string;
    maxItems?: number;
    version: GetListAccountAliasesVersionEnum;
}
export declare class GetListAccountAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAccountAliasesRequest extends SpeakeasyBase {
    queryParams: GetListAccountAliasesQueryParams;
    headers: GetListAccountAliasesHeaders;
}
export declare class GetListAccountAliasesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
