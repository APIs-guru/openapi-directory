import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroup } from "./keygroup";



export class CreateKeyGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroup?: KeyGroup;
}
