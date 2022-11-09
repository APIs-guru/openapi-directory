import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompatibilityEnum } from "./compatibilityenum";
import { ContainerDefinition } from "./containerdefinition";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { IpcModeEnum } from "./ipcmodeenum";
import { NetworkModeEnum } from "./networkmodeenum";
import { PidModeEnum } from "./pidmodeenum";
import { TaskDefinitionPlacementConstraint } from "./taskdefinitionplacementconstraint";
import { ProxyConfiguration } from "./proxyconfiguration";
import { Attribute } from "./attribute";
import { CompatibilityEnum } from "./compatibilityenum";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";
import { Volume } from "./volume";


// TaskDefinition
/** 
 * The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
**/
export class TaskDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibilities" })
  compatibilities?: CompatibilityEnum[];

  @Metadata({ data: "json, name=containerDefinitions", elemType: shared.ContainerDefinition })
  containerDefinitions?: ContainerDefinition[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=deregisteredAt" })
  deregisteredAt?: Date;

  @Metadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=inferenceAccelerators", elemType: shared.InferenceAccelerator })
  inferenceAccelerators?: InferenceAccelerator[];

  @Metadata({ data: "json, name=ipcMode" })
  ipcMode?: IpcModeEnum;

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=networkMode" })
  networkMode?: NetworkModeEnum;

  @Metadata({ data: "json, name=pidMode" })
  pidMode?: PidModeEnum;

  @Metadata({ data: "json, name=placementConstraints", elemType: shared.TaskDefinitionPlacementConstraint })
  placementConstraints?: TaskDefinitionPlacementConstraint[];

  @Metadata({ data: "json, name=proxyConfiguration" })
  proxyConfiguration?: ProxyConfiguration;

  @Metadata({ data: "json, name=registeredAt" })
  registeredAt?: Date;

  @Metadata({ data: "json, name=registeredBy" })
  registeredBy?: string;

  @Metadata({ data: "json, name=requiresAttributes", elemType: shared.Attribute })
  requiresAttributes?: Attribute[];

  @Metadata({ data: "json, name=requiresCompatibilities" })
  requiresCompatibilities?: CompatibilityEnum[];

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=status" })
  status?: TaskDefinitionStatusEnum;

  @Metadata({ data: "json, name=taskDefinitionArn" })
  taskDefinitionArn?: string;

  @Metadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
