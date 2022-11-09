import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchStatementErrorCodeEnumEnum } from "./batchstatementerrorcodeenumenum";


// BatchStatementError
/** 
 *  An error associated with a statement in a PartiQL batch that was run. 
**/
export class BatchStatementError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: BatchStatementErrorCodeEnumEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
