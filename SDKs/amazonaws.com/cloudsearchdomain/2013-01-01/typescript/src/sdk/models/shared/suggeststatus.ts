import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuggestStatus
/** 
 * Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
**/
export class SuggestStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=rid" })
  rid?: string;

  @Metadata({ data: "json, name=timems" })
  timems?: number;
}
