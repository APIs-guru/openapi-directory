import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveAttributesFromFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeKeys" })
  attributeKeys: string[];

  @SpeakeasyMetadata({ data: "json, name=findingArns" })
  findingArns: string[];
}
