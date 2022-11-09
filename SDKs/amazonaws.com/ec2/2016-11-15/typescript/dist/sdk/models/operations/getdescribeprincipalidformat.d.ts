import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribePrincipalIdFormatActionEnum {
    DescribePrincipalIdFormat = "DescribePrincipalIdFormat"
}
export declare enum GetDescribePrincipalIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribePrincipalIdFormatQueryParams extends SpeakeasyBase {
    action: GetDescribePrincipalIdFormatActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    resource?: string[];
    version: GetDescribePrincipalIdFormatVersionEnum;
}
export declare class GetDescribePrincipalIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribePrincipalIdFormatRequest extends SpeakeasyBase {
    queryParams: GetDescribePrincipalIdFormatQueryParams;
    headers: GetDescribePrincipalIdFormatHeaders;
}
export declare class GetDescribePrincipalIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
