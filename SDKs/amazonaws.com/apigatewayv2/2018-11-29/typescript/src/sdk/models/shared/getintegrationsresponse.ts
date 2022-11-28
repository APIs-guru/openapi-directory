import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Integration } from "./integration";



export class GetIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Integration })
  items?: Integration[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
