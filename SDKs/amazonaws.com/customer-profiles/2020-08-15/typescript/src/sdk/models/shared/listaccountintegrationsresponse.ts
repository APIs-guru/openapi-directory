import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListIntegrationItem } from "./listintegrationitem";



export class ListAccountIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ListIntegrationItem })
  items?: ListIntegrationItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
