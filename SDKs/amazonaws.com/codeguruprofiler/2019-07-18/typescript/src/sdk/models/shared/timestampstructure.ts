import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampStructure
/** 
 *  A data type that contains a <code>Timestamp</code> object. This is specified using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1 millisecond past June 1, 2020 1:15:02 PM UTC. 
**/
export class TimestampStructure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Date;
}
