import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeInstanceAttributeActionEnum {
    DescribeInstanceAttribute = "DescribeInstanceAttribute"
}
export declare enum GetDescribeInstanceAttributeAttributeEnum {
    InstanceType = "instanceType",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    UserData = "userData",
    DisableApiTermination = "disableApiTermination",
    InstanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior",
    RootDeviceName = "rootDeviceName",
    BlockDeviceMapping = "blockDeviceMapping",
    ProductCodes = "productCodes",
    SourceDestCheck = "sourceDestCheck",
    GroupSet = "groupSet",
    EbsOptimized = "ebsOptimized",
    SriovNetSupport = "sriovNetSupport",
    EnaSupport = "enaSupport",
    EnclaveOptions = "enclaveOptions"
}
export declare enum GetDescribeInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeInstanceAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeInstanceAttributeActionEnum;
    attribute: GetDescribeInstanceAttributeAttributeEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetDescribeInstanceAttributeVersionEnum;
}
export declare class GetDescribeInstanceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeInstanceAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeInstanceAttributeQueryParams;
    headers: GetDescribeInstanceAttributeHeaders;
}
export declare class GetDescribeInstanceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
