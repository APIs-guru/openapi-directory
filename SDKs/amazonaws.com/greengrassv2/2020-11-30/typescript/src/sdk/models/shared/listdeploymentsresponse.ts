import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";



export class ListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: Deployment })
  deployments?: Deployment[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
