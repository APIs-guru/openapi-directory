import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { FargatePlatformConfiguration } from "./fargateplatformconfiguration";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { MountPoint } from "./mountpoint";
import { NetworkConfiguration } from "./networkconfiguration";
import { NetworkInterface } from "./networkinterface";
import { ResourceRequirement } from "./resourcerequirement";
import { Secret } from "./secret";
import { Ulimit } from "./ulimit";
import { Volume } from "./volume";
/**
 * An object representing the details of a container that's part of a job.
**/
export declare class ContainerDetail extends SpeakeasyBase {
    command?: string[];
    containerInstanceArn?: string;
    environment?: KeyValuePair[];
    executionRoleArn?: string;
    exitCode?: number;
    fargatePlatformConfiguration?: FargatePlatformConfiguration;
    image?: string;
    instanceType?: string;
    jobRoleArn?: string;
    linuxParameters?: LinuxParameters;
    logConfiguration?: LogConfiguration;
    logStreamName?: string;
    memory?: number;
    mountPoints?: MountPoint[];
    networkConfiguration?: NetworkConfiguration;
    networkInterfaces?: NetworkInterface[];
    privileged?: boolean;
    readonlyRootFilesystem?: boolean;
    reason?: string;
    resourceRequirements?: ResourceRequirement[];
    secrets?: Secret[];
    taskArn?: string;
    ulimits?: Ulimit[];
    user?: string;
    vcpus?: number;
    volumes?: Volume[];
}
