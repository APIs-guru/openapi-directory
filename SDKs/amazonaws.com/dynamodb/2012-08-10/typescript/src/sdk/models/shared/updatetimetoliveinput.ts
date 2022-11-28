import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveSpecification } from "./timetolivespecification";



// UpdateTimeToLiveInput
/** 
 * Represents the input of an <code>UpdateTimeToLive</code> operation.
**/
export class UpdateTimeToLiveInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=TimeToLiveSpecification" })
  timeToLiveSpecification: TimeToLiveSpecification;
}
