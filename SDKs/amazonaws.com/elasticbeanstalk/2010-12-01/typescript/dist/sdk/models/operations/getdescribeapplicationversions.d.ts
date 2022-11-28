import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeApplicationVersionsActionEnum {
    DescribeApplicationVersions = "DescribeApplicationVersions"
}
export declare enum GetDescribeApplicationVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeApplicationVersionsQueryParams extends SpeakeasyBase {
    action: GetDescribeApplicationVersionsActionEnum;
    applicationName?: string;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeApplicationVersionsVersionEnum;
    versionLabels?: string[];
}
export declare class GetDescribeApplicationVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeApplicationVersionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeApplicationVersionsQueryParams;
    headers: GetDescribeApplicationVersionsHeaders;
}
export declare class GetDescribeApplicationVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
