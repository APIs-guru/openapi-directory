import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransitionState
/** 
 * Represents information about the state of transitions between one stage and another stage.
**/
export class TransitionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledReason" })
  disabledReason?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=lastChangedAt" })
  lastChangedAt?: Date;

  @Metadata({ data: "json, name=lastChangedBy" })
  lastChangedBy?: string;
}
