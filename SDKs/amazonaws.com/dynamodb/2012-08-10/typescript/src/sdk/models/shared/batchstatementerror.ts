import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementErrorCodeEnumEnum } from "./batchstatementerrorcodeenumenum";



// BatchStatementError
/** 
 *  An error associated with a statement in a PartiQL batch that was run. 
**/
export class BatchStatementError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: BatchStatementErrorCodeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
