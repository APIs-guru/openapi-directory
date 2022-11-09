import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompromisedCredentialsActionsType } from "./compromisedcredentialsactionstype";
import { EventFilterTypeEnum } from "./eventfiltertypeenum";


// CompromisedCredentialsRiskConfigurationType
/** 
 * The compromised credentials risk configuration type.
**/
export class CompromisedCredentialsRiskConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: CompromisedCredentialsActionsType;

  @Metadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilterTypeEnum[];
}
