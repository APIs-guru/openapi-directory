import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeStemmingOptionsActionEnum {
    DescribeStemmingOptions = "DescribeStemmingOptions"
}
export declare enum GetDescribeStemmingOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeStemmingOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeStemmingOptionsActionEnum;
    domainName: string;
    version: GetDescribeStemmingOptionsVersionEnum;
}
export declare class GetDescribeStemmingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeStemmingOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeStemmingOptionsQueryParams;
    headers: GetDescribeStemmingOptionsHeaders;
}
export declare class GetDescribeStemmingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
