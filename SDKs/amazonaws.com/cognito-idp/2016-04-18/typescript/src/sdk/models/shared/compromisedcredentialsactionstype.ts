import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompromisedCredentialsEventActionTypeEnum } from "./compromisedcredentialseventactiontypeenum";


// CompromisedCredentialsActionsType
/** 
 * The compromised credentials actions type
**/
export class CompromisedCredentialsActionsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventAction" })
  eventAction: CompromisedCredentialsEventActionTypeEnum;
}
