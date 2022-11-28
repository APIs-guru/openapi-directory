import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterizedStatement } from "./parameterizedstatement";



export class ExecuteTransactionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactStatements", elemType: ParameterizedStatement })
  transactStatements: ParameterizedStatement[];
}
