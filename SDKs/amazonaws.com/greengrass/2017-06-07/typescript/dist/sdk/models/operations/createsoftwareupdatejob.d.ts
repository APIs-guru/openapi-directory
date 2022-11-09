import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateSoftwareUpdateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare enum CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum {
    Core = "core",
    OtaAgent = "ota_agent"
}
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum {
    None = "NONE",
    Trace = "TRACE",
    Debug = "DEBUG",
    Verbose = "VERBOSE",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL"
}
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum {
    Armv6l = "armv6l",
    Armv7l = "armv7l",
    X8664 = "x86_64",
    Aarch64 = "aarch64"
}
export declare enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum {
    Ubuntu = "ubuntu",
    Raspbian = "raspbian",
    AmazonLinux = "amazon_linux",
    Openwrt = "openwrt"
}
export declare class CreateSoftwareUpdateJobRequestBody extends SpeakeasyBase {
    s3UrlSignerRole: string;
    softwareToUpdate: CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;
    updateAgentLogLevel?: CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;
    updateTargets: string[];
    updateTargetsArchitecture: CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;
    updateTargetsOperatingSystem: CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
}
export declare class CreateSoftwareUpdateJobRequest extends SpeakeasyBase {
    headers: CreateSoftwareUpdateJobHeaders;
    request: CreateSoftwareUpdateJobRequestBody;
}
export declare class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createSoftwareUpdateJobResponse?: shared.CreateSoftwareUpdateJobResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
