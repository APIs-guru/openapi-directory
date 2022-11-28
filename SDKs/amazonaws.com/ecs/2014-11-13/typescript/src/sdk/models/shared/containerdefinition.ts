import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=dependsOn", elemType: ContainerDependency })
  dependsOn?: ContainerDependency[];

  @SpeakeasyMetadata({ data: "json, name=disableNetworking" })
  disableNetworking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dnsSearchDomains" })
  dnsSearchDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsServers" })
  dnsServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=dockerLabels" })
  dockerLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=dockerSecurityOptions" })
  dockerSecurityOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment", elemType: KeyValuePair })
  environment?: KeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=environmentFiles", elemType: EnvironmentFile })
  environmentFiles?: EnvironmentFile[];

  @SpeakeasyMetadata({ data: "json, name=essential" })
  essential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extraHosts", elemType: HostEntry })
  extraHosts?: HostEntry[];

  @SpeakeasyMetadata({ data: "json, name=firelensConfiguration" })
  firelensConfiguration?: FirelensConfiguration;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=interactive" })
  interactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: string[];

  @SpeakeasyMetadata({ data: "json, name=linuxParameters" })
  linuxParameters?: LinuxParameters;

  @SpeakeasyMetadata({ data: "json, name=logConfiguration" })
  logConfiguration?: LogConfiguration;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryReservation" })
  memoryReservation?: number;

  @SpeakeasyMetadata({ data: "json, name=mountPoints", elemType: MountPoint })
  mountPoints?: MountPoint[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=portMappings", elemType: PortMapping })
  portMappings?: PortMapping[];

  @SpeakeasyMetadata({ data: "json, name=privileged" })
  privileged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pseudoTerminal" })
  pseudoTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repositoryCredentials" })
  repositoryCredentials?: RepositoryCredentials;

  @SpeakeasyMetadata({ data: "json, name=resourceRequirements", elemType: ResourceRequirement })
  resourceRequirements?: ResourceRequirement[];

  @SpeakeasyMetadata({ data: "json, name=secrets", elemType: Secret })
  secrets?: Secret[];

  @SpeakeasyMetadata({ data: "json, name=startTimeout" })
  startTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=stopTimeout" })
  stopTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=systemControls", elemType: SystemControl })
  systemControls?: SystemControl[];

  @SpeakeasyMetadata({ data: "json, name=ulimits", elemType: Ulimit })
  ulimits?: Ulimit[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=volumesFrom", elemType: VolumeFrom })
  volumesFrom?: VolumeFrom[];

  @SpeakeasyMetadata({ data: "json, name=workingDirectory" })
  workingDirectory?: string;
}
