import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeImageAttributeActionEnum {
    DescribeImageAttribute = "DescribeImageAttribute"
}
export declare enum GetDescribeImageAttributeAttributeEnum {
    Description = "description",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    LaunchPermission = "launchPermission",
    ProductCodes = "productCodes",
    BlockDeviceMapping = "blockDeviceMapping",
    SriovNetSupport = "sriovNetSupport",
    BootMode = "bootMode"
}
export declare enum GetDescribeImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeImageAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeImageAttributeActionEnum;
    attribute: GetDescribeImageAttributeAttributeEnum;
    dryRun?: boolean;
    imageId: string;
    version: GetDescribeImageAttributeVersionEnum;
}
export declare class GetDescribeImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeImageAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeImageAttributeQueryParams;
    headers: GetDescribeImageAttributeHeaders;
}
export declare class GetDescribeImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
