import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateSynonymOptionsActionEnum {
    UpdateSynonymOptions = "UpdateSynonymOptions"
}
export declare enum GetUpdateSynonymOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetUpdateSynonymOptionsQueryParams extends SpeakeasyBase {
    action: GetUpdateSynonymOptionsActionEnum;
    domainName: string;
    synonyms: string;
    version: GetUpdateSynonymOptionsVersionEnum;
}
export declare class GetUpdateSynonymOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateSynonymOptionsRequest extends SpeakeasyBase {
    queryParams: GetUpdateSynonymOptionsQueryParams;
    headers: GetUpdateSynonymOptionsHeaders;
}
export declare class GetUpdateSynonymOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
