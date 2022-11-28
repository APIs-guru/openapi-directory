import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchStatus
/** 
 * Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
**/
export class SearchStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rid" })
  rid?: string;

  @SpeakeasyMetadata({ data: "json, name=timems" })
  timems?: number;
}
