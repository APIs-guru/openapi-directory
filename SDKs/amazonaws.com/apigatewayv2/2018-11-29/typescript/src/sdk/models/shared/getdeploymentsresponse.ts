import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deployment } from "./deployment";


export class GetDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Deployment })
  items?: Deployment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
