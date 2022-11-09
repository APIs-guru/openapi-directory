import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeCustomerGatewaysActionEnum {
    DescribeCustomerGateways = "DescribeCustomerGateways"
}
export declare enum PostDescribeCustomerGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeCustomerGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeCustomerGatewaysActionEnum;
    version: PostDescribeCustomerGatewaysVersionEnum;
}
export declare class PostDescribeCustomerGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCustomerGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeCustomerGatewaysQueryParams;
    headers: PostDescribeCustomerGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCustomerGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
