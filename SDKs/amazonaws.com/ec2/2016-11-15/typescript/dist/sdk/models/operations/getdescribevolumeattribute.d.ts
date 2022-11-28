import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeVolumeAttributeActionEnum {
    DescribeVolumeAttribute = "DescribeVolumeAttribute"
}
export declare enum GetDescribeVolumeAttributeAttributeEnum {
    AutoEnableIo = "autoEnableIO",
    ProductCodes = "productCodes"
}
export declare enum GetDescribeVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeVolumeAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeVolumeAttributeActionEnum;
    attribute: GetDescribeVolumeAttributeAttributeEnum;
    dryRun?: boolean;
    version: GetDescribeVolumeAttributeVersionEnum;
    volumeId: string;
}
export declare class GetDescribeVolumeAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeVolumeAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeVolumeAttributeQueryParams;
    headers: GetDescribeVolumeAttributeHeaders;
}
export declare class GetDescribeVolumeAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
