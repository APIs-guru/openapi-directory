import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";



export class GetDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Deployment })
  items?: Deployment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
