import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { IpcModeEnum } from "./ipcmodeenum";
import { NetworkModeEnum } from "./networkmodeenum";
import { PidModeEnum } from "./pidmodeenum";
import { TaskDefinitionPlacementConstraint } from "./taskdefinitionplacementconstraint";
import { ProxyConfiguration } from "./proxyconfiguration";
import { CompatibilityEnum } from "./compatibilityenum";
import { Tag } from "./tag";
import { Volume } from "./volume";



export class RegisterTaskDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerDefinitions", elemType: ContainerDefinition })
  containerDefinitions: ContainerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family: string;

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

  @SpeakeasyMetadata({ data: "json, name=requiresCompatibilities" })
  requiresCompatibilities?: CompatibilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
