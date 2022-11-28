import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class TagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
