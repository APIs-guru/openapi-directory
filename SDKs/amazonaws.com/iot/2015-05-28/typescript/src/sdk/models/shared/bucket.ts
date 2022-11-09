import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bucket
/** 
 * A count of documents that meets a specific aggregation criteria.
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;
}
