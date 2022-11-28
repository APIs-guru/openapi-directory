import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchListObjectChildrenResponse
/** 
 * Represents the output of a <a>ListObjectChildren</a> response operation.
**/
export class BatchListObjectChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Children" })
  children?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
