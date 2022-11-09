import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeStopwordOptionsActionEnum {
    DescribeStopwordOptions = "DescribeStopwordOptions"
}
export declare enum GetDescribeStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeStopwordOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeStopwordOptionsActionEnum;
    domainName: string;
    version: GetDescribeStopwordOptionsVersionEnum;
}
export declare class GetDescribeStopwordOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeStopwordOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeStopwordOptionsQueryParams;
    headers: GetDescribeStopwordOptionsHeaders;
}
export declare class GetDescribeStopwordOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
