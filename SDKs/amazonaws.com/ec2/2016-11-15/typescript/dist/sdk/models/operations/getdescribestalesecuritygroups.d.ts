import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeStaleSecurityGroupsActionEnum {
    DescribeStaleSecurityGroups = "DescribeStaleSecurityGroups"
}
export declare enum GetDescribeStaleSecurityGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeStaleSecurityGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeStaleSecurityGroupsActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    version: GetDescribeStaleSecurityGroupsVersionEnum;
    vpcId: string;
}
export declare class GetDescribeStaleSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeStaleSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeStaleSecurityGroupsQueryParams;
    headers: GetDescribeStaleSecurityGroupsHeaders;
}
export declare class GetDescribeStaleSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
