import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimestreamDimension
/** 
 * Metadata attributes of the time series that are written in each measure record.
**/
export class TimestreamDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
