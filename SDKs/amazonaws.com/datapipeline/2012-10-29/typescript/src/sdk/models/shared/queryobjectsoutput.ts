import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryObjectsOutput
/** 
 * Contains the output of QueryObjects.
**/
export class QueryObjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=marker" })
  marker?: string;
}
