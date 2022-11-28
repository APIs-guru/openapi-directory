import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSuggesterActionEnum {
    DeleteSuggester = "DeleteSuggester"
}
export declare enum GetDeleteSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDeleteSuggesterQueryParams extends SpeakeasyBase {
    action: GetDeleteSuggesterActionEnum;
    domainName: string;
    suggesterName: string;
    version: GetDeleteSuggesterVersionEnum;
}
export declare class GetDeleteSuggesterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSuggesterRequest extends SpeakeasyBase {
    queryParams: GetDeleteSuggesterQueryParams;
    headers: GetDeleteSuggesterHeaders;
}
export declare class GetDeleteSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
