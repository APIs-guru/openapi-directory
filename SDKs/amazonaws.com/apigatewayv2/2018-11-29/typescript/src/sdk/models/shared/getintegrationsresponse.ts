import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Integration } from "./integration";


export class GetIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Integration })
  items?: Integration[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
