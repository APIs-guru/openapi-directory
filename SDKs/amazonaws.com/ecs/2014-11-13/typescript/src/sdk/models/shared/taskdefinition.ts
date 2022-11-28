import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";
import { Volume } from "./volume";



// TaskDefinition
/** 
 * The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
**/
export class TaskDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibilities" })
  compatibilities?: CompatibilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=containerDefinitions", elemType: ContainerDefinition })
  containerDefinitions?: ContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=deregisteredAt" })
  deregisteredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=inferenceAccelerators", elemType: InferenceAccelerator })
  inferenceAccelerators?: InferenceAccelerator[];

  @SpeakeasyMetadata({ data: "json, name=ipcMode" })
  ipcMode?: IpcModeEnum;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=networkMode" })
  networkMode?: NetworkModeEnum;

  @SpeakeasyMetadata({ data: "json, name=pidMode" })
  pidMode?: PidModeEnum;

  @SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: TaskDefinitionPlacementConstraint })
  placementConstraints?: TaskDefinitionPlacementConstraint[];

  @SpeakeasyMetadata({ data: "json, name=proxyConfiguration" })
  proxyConfiguration?: ProxyConfiguration;

  @SpeakeasyMetadata({ data: "json, name=registeredAt" })
  registeredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=registeredBy" })
  registeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=requiresAttributes", elemType: Attribute })
  requiresAttributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=requiresCompatibilities" })
  requiresCompatibilities?: CompatibilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskDefinitionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskDefinitionArn" })
  taskDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
