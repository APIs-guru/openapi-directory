import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompromisedCredentialsEventActionTypeEnum } from "./compromisedcredentialseventactiontypeenum";



// CompromisedCredentialsActionsType
/** 
 * The compromised credentials actions type
**/
export class CompromisedCredentialsActionsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventAction" })
  eventAction: CompromisedCredentialsEventActionTypeEnum;
}
