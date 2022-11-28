import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitionState
/** 
 * Represents information about the state of transitions between one stage and another stage.
**/
export class TransitionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledReason" })
  disabledReason?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastChangedAt" })
  lastChangedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastChangedBy" })
  lastChangedBy?: string;
}
