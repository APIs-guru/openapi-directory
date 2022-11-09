import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { SuspendedState } from "./suspendedstate";


export class RegisterScalableTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=MinCapacity" })
  minCapacity?: number;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=SuspendedState" })
  suspendedState?: SuspendedState;
}
