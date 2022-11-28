import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagDescription } from "./tagdescription";



export class DescribeTagsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagDescription })
  tagDescriptions?: TagDescription[];
}
