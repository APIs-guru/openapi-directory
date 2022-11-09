import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}
export declare enum GetDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeInstancesHealthQueryParams extends SpeakeasyBase {
    action: GetDescribeInstancesHealthActionEnum;
    attributeNames?: shared.InstancesHealthAttributeEnum[];
    environmentId?: string;
    environmentName?: string;
    nextToken?: string;
    version: GetDescribeInstancesHealthVersionEnum;
}
export declare class GetDescribeInstancesHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeInstancesHealthRequest extends SpeakeasyBase {
    queryParams: GetDescribeInstancesHealthQueryParams;
    headers: GetDescribeInstancesHealthHeaders;
}
export declare class GetDescribeInstancesHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
