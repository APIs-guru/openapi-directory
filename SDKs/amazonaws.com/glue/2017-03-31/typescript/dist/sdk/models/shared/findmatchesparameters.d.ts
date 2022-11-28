import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The parameters to configure the find matches transform.
**/
export declare class FindMatchesParameters extends SpeakeasyBase {
    accuracyCostTradeoff?: number;
    enforceProvidedLabels?: boolean;
    precisionRecallTradeoff?: number;
    primaryKeyColumnName?: string;
}
