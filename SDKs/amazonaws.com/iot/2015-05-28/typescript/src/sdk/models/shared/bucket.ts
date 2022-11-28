import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bucket
/** 
 * A count of documents that meets a specific aggregation criteria.
**/
export class Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;
}
