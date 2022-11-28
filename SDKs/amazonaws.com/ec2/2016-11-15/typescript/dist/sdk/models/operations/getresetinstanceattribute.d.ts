import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResetInstanceAttributeActionEnum {
    ResetInstanceAttribute = "ResetInstanceAttribute"
}
export declare enum GetResetInstanceAttributeAttributeEnum {
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
export declare enum GetResetInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetInstanceAttributeQueryParams extends SpeakeasyBase {
    action: GetResetInstanceAttributeActionEnum;
    attribute: GetResetInstanceAttributeAttributeEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetResetInstanceAttributeVersionEnum;
}
export declare class GetResetInstanceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetInstanceAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetInstanceAttributeQueryParams;
    headers: GetResetInstanceAttributeHeaders;
}
export declare class GetResetInstanceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
