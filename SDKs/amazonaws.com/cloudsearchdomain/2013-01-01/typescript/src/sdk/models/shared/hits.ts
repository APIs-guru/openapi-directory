import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hit } from "./hit";


// Hits
/** 
 * The collection of documents that match the search request.
**/
export class Hits extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=found" })
  found?: number;

  @Metadata({ data: "json, name=hit", elemType: shared.Hit })
  hit?: Hit[];

  @Metadata({ data: "json, name=start" })
  start?: number;
}
