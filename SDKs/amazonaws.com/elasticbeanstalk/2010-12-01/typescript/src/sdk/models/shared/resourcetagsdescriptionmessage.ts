import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ResourceTagsDescriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceArn?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  resourceTags?: Tag[];
}
