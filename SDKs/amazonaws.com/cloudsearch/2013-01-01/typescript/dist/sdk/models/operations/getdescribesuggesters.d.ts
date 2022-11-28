import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSuggestersActionEnum {
    DescribeSuggesters = "DescribeSuggesters"
}
export declare enum GetDescribeSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeSuggestersQueryParams extends SpeakeasyBase {
    action: GetDescribeSuggestersActionEnum;
    deployed?: boolean;
    domainName: string;
    suggesterNames?: string[];
    version: GetDescribeSuggestersVersionEnum;
}
export declare class GetDescribeSuggestersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSuggestersRequest extends SpeakeasyBase {
    queryParams: GetDescribeSuggestersQueryParams;
    headers: GetDescribeSuggestersHeaders;
}
export declare class GetDescribeSuggestersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
