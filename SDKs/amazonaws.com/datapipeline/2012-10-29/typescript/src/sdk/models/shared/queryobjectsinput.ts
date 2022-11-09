import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";


// QueryObjectsInput
/** 
 * Contains the parameters for QueryObjects.
**/
export class QueryObjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=marker" })
  marker?: string;

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=query" })
  query?: Query;

  @Metadata({ data: "json, name=sphere" })
  sphere: string;
}
