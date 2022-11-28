import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterizedStatement } from "./parameterizedstatement";
export declare class ExecuteTransactionInput extends SpeakeasyBase {
    clientRequestToken?: string;
    transactStatements: ParameterizedStatement[];
}
