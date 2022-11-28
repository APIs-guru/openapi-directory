import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";



// QueryObjectsInput
/** 
 * Contains the parameters for QueryObjects.
**/
export class QueryObjectsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;

  @SpeakeasyMetadata({ data: "json, name=sphere" })
  sphere: string;
}
