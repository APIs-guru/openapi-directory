import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeToLiveSpecification } from "./timetolivespecification";


// UpdateTimeToLiveInput
/** 
 * Represents the input of an <code>UpdateTimeToLive</code> operation.
**/
export class UpdateTimeToLiveInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=TimeToLiveSpecification" })
  timeToLiveSpecification: TimeToLiveSpecification;
}
