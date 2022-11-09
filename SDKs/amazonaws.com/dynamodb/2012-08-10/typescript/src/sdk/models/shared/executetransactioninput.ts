import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterizedStatement } from "./parameterizedstatement";


export class ExecuteTransactionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=TransactStatements", elemType: shared.ParameterizedStatement })
  transactStatements: ParameterizedStatement[];
}
