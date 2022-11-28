import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryObjectsOutput
/** 
 * Contains the output of QueryObjects.
**/
export class QueryObjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;
}
