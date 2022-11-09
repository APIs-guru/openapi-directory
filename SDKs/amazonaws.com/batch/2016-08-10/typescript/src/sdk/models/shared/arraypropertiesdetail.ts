import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArrayPropertiesDetail
/** 
 * An object representing the array properties of a job.
**/
export class ArrayPropertiesDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=statusSummary" })
  statusSummary?: Map<string, number>;
}
