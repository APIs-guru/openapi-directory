import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BufferingHints
/** 
 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
**/
export class BufferingHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=IntervalInSeconds" })
  intervalInSeconds?: number;

  @Metadata({ data: "json, name=SizeInMBs" })
  sizeInMBs?: number;
}
