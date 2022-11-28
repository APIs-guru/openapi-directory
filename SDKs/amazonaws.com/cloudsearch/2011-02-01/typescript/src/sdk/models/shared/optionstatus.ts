import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStateEnum } from "./optionstateenum";



// OptionStatus
/** 
 * The status of an option, including when it was last updated and whether it is actively in use for searches.
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
