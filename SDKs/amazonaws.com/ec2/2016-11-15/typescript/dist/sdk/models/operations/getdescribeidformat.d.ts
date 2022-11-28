import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeIdFormatActionEnum {
    DescribeIdFormat = "DescribeIdFormat"
}
export declare enum GetDescribeIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeIdFormatQueryParams extends SpeakeasyBase {
    action: GetDescribeIdFormatActionEnum;
    resource?: string;
    version: GetDescribeIdFormatVersionEnum;
}
export declare class GetDescribeIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeIdFormatRequest extends SpeakeasyBase {
    queryParams: GetDescribeIdFormatQueryParams;
    headers: GetDescribeIdFormatHeaders;
}
export declare class GetDescribeIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
