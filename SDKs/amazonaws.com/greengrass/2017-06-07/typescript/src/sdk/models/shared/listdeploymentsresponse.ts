import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deployment } from "./deployment";


export class ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deployments", elemType: shared.Deployment })
  deployments?: Deployment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
