import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class ListInstanceProfileTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags: Tag[];
}
