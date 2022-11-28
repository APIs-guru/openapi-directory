import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDescribeEnvironmentHealthActionEnum {
    DescribeEnvironmentHealth = "DescribeEnvironmentHealth"
}
export declare enum GetDescribeEnvironmentHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEnvironmentHealthQueryParams extends SpeakeasyBase {
    action: GetDescribeEnvironmentHealthActionEnum;
    attributeNames?: shared.EnvironmentHealthAttributeEnum[];
    environmentId?: string;
    environmentName?: string;
    version: GetDescribeEnvironmentHealthVersionEnum;
}
export declare class GetDescribeEnvironmentHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEnvironmentHealthRequest extends SpeakeasyBase {
    queryParams: GetDescribeEnvironmentHealthQueryParams;
    headers: GetDescribeEnvironmentHealthHeaders;
}
export declare class GetDescribeEnvironmentHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
