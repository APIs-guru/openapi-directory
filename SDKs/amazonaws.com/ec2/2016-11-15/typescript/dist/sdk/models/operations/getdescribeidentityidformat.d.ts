import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeIdentityIdFormatActionEnum {
    DescribeIdentityIdFormat = "DescribeIdentityIdFormat"
}
export declare enum GetDescribeIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeIdentityIdFormatQueryParams extends SpeakeasyBase {
    action: GetDescribeIdentityIdFormatActionEnum;
    principalArn: string;
    resource?: string;
    version: GetDescribeIdentityIdFormatVersionEnum;
}
export declare class GetDescribeIdentityIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeIdentityIdFormatRequest extends SpeakeasyBase {
    queryParams: GetDescribeIdentityIdFormatQueryParams;
    headers: GetDescribeIdentityIdFormatHeaders;
}
export declare class GetDescribeIdentityIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
