import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";



export class GetModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Model })
  items?: Model[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
