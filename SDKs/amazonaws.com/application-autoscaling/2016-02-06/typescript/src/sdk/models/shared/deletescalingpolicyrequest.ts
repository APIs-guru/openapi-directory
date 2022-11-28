import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";



export class DeleteScalingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;
}
