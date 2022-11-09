import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListIntegrationItem } from "./listintegrationitem";


export class ListIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ListIntegrationItem })
  items?: ListIntegrationItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
