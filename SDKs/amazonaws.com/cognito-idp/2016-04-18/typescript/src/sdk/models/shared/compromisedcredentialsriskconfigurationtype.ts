import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompromisedCredentialsActionsType } from "./compromisedcredentialsactionstype";
import { EventFilterTypeEnum } from "./eventfiltertypeenum";



// CompromisedCredentialsRiskConfigurationType
/** 
 * The compromised credentials risk configuration type.
**/
export class CompromisedCredentialsRiskConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions: CompromisedCredentialsActionsType;

  @SpeakeasyMetadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilterTypeEnum[];
}
