import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerDependency } from "./containerdependency";
import { KeyValuePair } from "./keyvaluepair";
import { EnvironmentFile } from "./environmentfile";
import { HostEntry } from "./hostentry";
import { FirelensConfiguration } from "./firelensconfiguration";
import { HealthCheck } from "./healthcheck";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { MountPoint } from "./mountpoint";
import { PortMapping } from "./portmapping";
import { RepositoryCredentials } from "./repositorycredentials";
import { ResourceRequirement } from "./resourcerequirement";
import { Secret } from "./secret";
import { SystemControl } from "./systemcontrol";
import { Ulimit } from "./ulimit";
import { VolumeFrom } from "./volumefrom";


// ContainerDefinition
/** 
 * Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
**/
export class ContainerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=dependsOn", elemType: shared.ContainerDependency })
  dependsOn?: ContainerDependency[];

  @Metadata({ data: "json, name=disableNetworking" })
  disableNetworking?: boolean;

  @Metadata({ data: "json, name=dnsSearchDomains" })
  dnsSearchDomains?: string[];

  @Metadata({ data: "json, name=dnsServers" })
  dnsServers?: string[];

  @Metadata({ data: "json, name=dockerLabels" })
  dockerLabels?: Map<string, string>;

  @Metadata({ data: "json, name=dockerSecurityOptions" })
  dockerSecurityOptions?: string[];

  @Metadata({ data: "json, name=entryPoint" })
  entryPoint?: string[];

  @Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair })
  environment?: KeyValuePair[];

  @Metadata({ data: "json, name=environmentFiles", elemType: shared.EnvironmentFile })
  environmentFiles?: EnvironmentFile[];

  @Metadata({ data: "json, name=essential" })
  essential?: boolean;

  @Metadata({ data: "json, name=extraHosts", elemType: shared.HostEntry })
  extraHosts?: HostEntry[];

  @Metadata({ data: "json, name=firelensConfiguration" })
  firelensConfiguration?: FirelensConfiguration;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=interactive" })
  interactive?: boolean;

  @Metadata({ data: "json, name=links" })
  links?: string[];

  @Metadata({ data: "json, name=linuxParameters" })
  linuxParameters?: LinuxParameters;

  @Metadata({ data: "json, name=logConfiguration" })
  logConfiguration?: LogConfiguration;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=memoryReservation" })
  memoryReservation?: number;

  @Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint })
  mountPoints?: MountPoint[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=portMappings", elemType: shared.PortMapping })
  portMappings?: PortMapping[];

  @Metadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @Metadata({ data: "json, name=pseudoTerminal" })
  pseudoTerminal?: boolean;

  @Metadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @Metadata({ data: "json, name=repositoryCredentials" })
  repositoryCredentials?: RepositoryCredentials;

  @Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @Metadata({ data: "json, name=secrets", elemType: shared.Secret })
  secrets?: Secret[];

  @Metadata({ data: "json, name=startTimeout" })
  startTimeout?: number;

  @Metadata({ data: "json, name=stopTimeout" })
  stopTimeout?: number;

  @Metadata({ data: "json, name=systemControls", elemType: shared.SystemControl })
  systemControls?: SystemControl[];

  @Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit })
  ulimits?: Ulimit[];

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=volumesFrom", elemType: shared.VolumeFrom })
  volumesFrom?: VolumeFrom[];

  @Metadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}
