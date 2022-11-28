import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// ContainerDetail
/** 
 * An object representing the details of a container that's part of a job.
**/
export class ContainerDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: KeyValuePair })
  environment?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=fargatePlatformConfiguration" })
  fargatePlatformConfiguration?: FargatePlatformConfiguration;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=jobRoleArn" })
  jobRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=linuxParameters" })
  linuxParameters?: LinuxParameters;

  @SpeakeasyMetadata({ data: "json, name=logConfiguration" })
  logConfiguration?: LogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=mountPoints", elemType: MountPoint })
  mountPoints?: MountPoint[];

  @SpeakeasyMetadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: Secret })
  secrets?: Secret[];

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ulimits", elemType: Ulimit })
  ulimits?: Ulimit[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
