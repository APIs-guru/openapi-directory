import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArrayPropertiesSummary
/** 
 * An object representing the array properties of a job.
**/
export class ArrayPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
