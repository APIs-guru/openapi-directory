import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStateEnum } from "./optionstateenum";



// OptionStatus
/** 
 * The status of domain configuration option.
**/
export class OptionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationDate: Date;

  @SpeakeasyMetadata()
  pendingDeletion?: boolean;

  @SpeakeasyMetadata()
  state: OptionStateEnum;

  @SpeakeasyMetadata()
  updateDate: Date;

  @SpeakeasyMetadata()
  updateVersion?: number;
}
