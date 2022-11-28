import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



export class AddAttributesToFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=findingArns" })
  findingArns: string[];
}
