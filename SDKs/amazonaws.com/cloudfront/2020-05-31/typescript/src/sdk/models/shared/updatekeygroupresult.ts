import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroup } from "./keygroup";



export class UpdateKeyGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroup?: KeyGroup;
}
