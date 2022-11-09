import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestreamDimension
/** 
 * Metadata attributes of the time series that are written in each measure record.
**/
export class TimestreamDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
