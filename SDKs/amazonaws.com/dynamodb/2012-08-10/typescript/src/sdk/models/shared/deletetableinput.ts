import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTableInput
/** 
 * Represents the input of a <code>DeleteTable</code> operation.
**/
export class DeleteTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
