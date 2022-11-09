import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveAttributesFromFindingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeKeys" })
  attributeKeys: string[];

  @Metadata({ data: "json, name=findingArns" })
  findingArns: string[];
}
