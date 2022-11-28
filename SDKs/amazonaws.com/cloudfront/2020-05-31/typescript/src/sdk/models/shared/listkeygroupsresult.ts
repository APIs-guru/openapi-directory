import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupList } from "./keygrouplist";



export class ListKeyGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroupList?: KeyGroupList;
}
