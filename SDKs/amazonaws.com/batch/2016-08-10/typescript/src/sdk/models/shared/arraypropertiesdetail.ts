import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArrayPropertiesDetail
/** 
 * An object representing the array properties of a job.
**/
export class ArrayPropertiesDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=statusSummary" })
  statusSummary?: Map<string, number>;
}
