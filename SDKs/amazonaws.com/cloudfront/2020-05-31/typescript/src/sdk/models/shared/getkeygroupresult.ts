import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroup } from "./keygroup";



export class GetKeyGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroup?: KeyGroup;
}
