import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEnvironmentsActionEnum {
    DescribeEnvironments = "DescribeEnvironments"
}
export declare enum GetDescribeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEnvironmentsQueryParams extends SpeakeasyBase {
    action: GetDescribeEnvironmentsActionEnum;
    applicationName?: string;
    environmentIds?: string[];
    environmentNames?: string[];
    includeDeleted?: boolean;
    includedDeletedBackTo?: Date;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeEnvironmentsVersionEnum;
    versionLabel?: string;
}
export declare class GetDescribeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEnvironmentsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEnvironmentsQueryParams;
    headers: GetDescribeEnvironmentsHeaders;
}
export declare class GetDescribeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
