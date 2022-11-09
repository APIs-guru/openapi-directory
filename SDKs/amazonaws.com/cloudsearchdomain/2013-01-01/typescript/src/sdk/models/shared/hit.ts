import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Hit
/** 
 * Information about a document that matches the search request.
**/
export class Hit extends SpeakeasyBase {
  @Metadata({ data: "json, name=exprs" })
  exprs?: Map<string, string>;

  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string[]>;

  @Metadata({ data: "json, name=highlights" })
  highlights?: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
