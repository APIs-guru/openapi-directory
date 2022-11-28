import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Hit
/** 
 * Information about a document that matches the search request.
**/
export class Hit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exprs" })
  exprs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
