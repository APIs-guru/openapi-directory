import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class TagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
