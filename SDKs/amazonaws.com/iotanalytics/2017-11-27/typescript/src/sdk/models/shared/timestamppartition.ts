import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampPartition
/** 
 *  A partition dimension defined by a timestamp attribute. 
**/
export class TimestampPartition extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=timestampFormat" })
  timestampFormat?: string;
}
