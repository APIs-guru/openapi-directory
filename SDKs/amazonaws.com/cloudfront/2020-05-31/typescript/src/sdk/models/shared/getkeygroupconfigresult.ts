import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupConfig } from "./keygroupconfig";



export class GetKeyGroupConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroupConfig?: KeyGroupConfig;
}
