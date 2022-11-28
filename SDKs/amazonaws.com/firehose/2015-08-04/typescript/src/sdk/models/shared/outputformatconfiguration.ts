import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Serializer } from "./serializer";



// OutputFormatConfiguration
/** 
 * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
**/
export class OutputFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Serializer" })
  serializer?: Serializer;
}
