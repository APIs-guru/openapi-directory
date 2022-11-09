import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValuePair } from "./keyvaluepair";
import { FargatePlatformConfiguration } from "./fargateplatformconfiguration";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { MountPoint } from "./mountpoint";
import { NetworkConfiguration } from "./networkconfiguration";
import { ResourceRequirement } from "./resourcerequirement";
import { Secret } from "./secret";
import { Ulimit } from "./ulimit";
import { Volume } from "./volume";


// ContainerProperties
/** 
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
export class ContainerProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: KeyValuePair[];

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=fargatePlatformConfiguration" })
  fargatePlatformConfiguration?: FargatePlatformConfiguration;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=jobRoleArn" })
  jobRoleArn?: string;

  @Metadata({ data: "json, name=linuxParameters" })
  linuxParameters?: LinuxParameters;

  @Metadata({ data: "json, name=logConfiguration" })
  logConfiguration?: LogConfiguration;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint })
  mountPoints?: MountPoint[];

  @Metadata({ data: "json, name=networkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

  @Metadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @Metadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @Metadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: Secret[];

  @Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit })
  ulimits?: Ulimit[];

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
