import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=containerDefinitions", elemType: shared.ContainerDefinition })
  containerDefinitions: ContainerDefinition[];

  @Metadata({ data: "json, name=cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=ephemeralStorage" })
  ephemeralStorage?: EphemeralStorage;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=family" })
  family: string;

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

  @Metadata({ data: "json, name=requiresCompatibilities" })
  requiresCompatibilities?: CompatibilityEnum[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=taskRoleArn" })
  taskRoleArn?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
