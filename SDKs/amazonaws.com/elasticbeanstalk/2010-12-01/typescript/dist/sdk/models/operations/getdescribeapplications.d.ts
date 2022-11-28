import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeApplicationsActionEnum {
    DescribeApplications = "DescribeApplications"
}
export declare enum GetDescribeApplicationsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeApplicationsQueryParams extends SpeakeasyBase {
    action: GetDescribeApplicationsActionEnum;
    applicationNames?: string[];
    version: GetDescribeApplicationsVersionEnum;
}
export declare class GetDescribeApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeApplicationsRequest extends SpeakeasyBase {
    queryParams: GetDescribeApplicationsQueryParams;
    headers: GetDescribeApplicationsHeaders;
}
export declare class GetDescribeApplicationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
