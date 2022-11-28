import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArrayPropertiesSummary
/** 
 * An object representing the array properties of a job.
**/
export class ArrayPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
