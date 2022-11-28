import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationIds" })
  configurationIds: string[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];
}
