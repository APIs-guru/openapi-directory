import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";


export class DeleteScalingPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;
}
