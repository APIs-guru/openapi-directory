import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestampPartition
/** 
 *  A partition dimension defined by a timestamp attribute. 
**/
export class TimestampPartition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=timestampFormat" })
  timestampFormat?: string;
}
