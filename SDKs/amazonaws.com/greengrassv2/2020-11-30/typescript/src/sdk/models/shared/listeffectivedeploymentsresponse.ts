import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectiveDeployment } from "./effectivedeployment";


export class ListEffectiveDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveDeployments", elemType: shared.EffectiveDeployment })
  effectiveDeployments?: EffectiveDeployment[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
