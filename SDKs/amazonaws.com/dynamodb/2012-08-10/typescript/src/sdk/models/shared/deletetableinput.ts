import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTableInput
/** 
 * Represents the input of a <code>DeleteTable</code> operation.
**/
export class DeleteTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
