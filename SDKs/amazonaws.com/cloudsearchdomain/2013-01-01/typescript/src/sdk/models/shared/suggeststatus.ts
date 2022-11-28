import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuggestStatus
/** 
 * Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
**/
export class SuggestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rid" })
  rid?: string;

  @SpeakeasyMetadata({ data: "json, name=timems" })
  timems?: number;
}
