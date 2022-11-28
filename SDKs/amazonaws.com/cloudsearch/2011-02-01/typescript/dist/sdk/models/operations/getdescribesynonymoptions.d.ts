import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSynonymOptionsActionEnum {
    DescribeSynonymOptions = "DescribeSynonymOptions"
}
export declare enum GetDescribeSynonymOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeSynonymOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeSynonymOptionsActionEnum;
    domainName: string;
    version: GetDescribeSynonymOptionsVersionEnum;
}
export declare class GetDescribeSynonymOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSynonymOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeSynonymOptionsQueryParams;
    headers: GetDescribeSynonymOptionsHeaders;
}
export declare class GetDescribeSynonymOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
