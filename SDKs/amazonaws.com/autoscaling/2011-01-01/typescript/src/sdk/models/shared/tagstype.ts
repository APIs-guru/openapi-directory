import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagDescription } from "./tagdescription";



export class TagsType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TagDescription })
  tags?: TagDescription[];
}
