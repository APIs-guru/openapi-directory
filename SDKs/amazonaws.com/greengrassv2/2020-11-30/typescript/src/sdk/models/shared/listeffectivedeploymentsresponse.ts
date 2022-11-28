import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectiveDeployment } from "./effectivedeployment";



export class ListEffectiveDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveDeployments", elemType: EffectiveDeployment })
  effectiveDeployments?: EffectiveDeployment[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
