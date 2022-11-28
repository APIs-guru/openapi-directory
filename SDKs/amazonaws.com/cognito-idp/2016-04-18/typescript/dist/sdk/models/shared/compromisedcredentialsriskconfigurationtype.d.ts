import { SpeakeasyBase } from "../../../internal/utils";
import { CompromisedCredentialsActionsType } from "./compromisedcredentialsactionstype";
import { EventFilterTypeEnum } from "./eventfiltertypeenum";
/**
 * The compromised credentials risk configuration type.
**/
export declare class CompromisedCredentialsRiskConfigurationType extends SpeakeasyBase {
    actions: CompromisedCredentialsActionsType;
    eventFilter?: EventFilterTypeEnum[];
}
