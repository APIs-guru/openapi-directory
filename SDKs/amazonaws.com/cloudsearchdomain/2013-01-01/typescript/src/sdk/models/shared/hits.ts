import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hit } from "./hit";



// Hits
/** 
 * The collection of documents that match the search request.
**/
export class Hits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=found" })
  found?: number;

  @SpeakeasyMetadata({ data: "json, name=hit", elemType: Hit })
  hit?: Hit[];

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
