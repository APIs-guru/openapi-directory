import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchListObjectChildrenResponse
/** 
 * Represents the output of a <a>ListObjectChildren</a> response operation.
**/
export class BatchListObjectChildrenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Children" })
  children?: Map<string, string>;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
