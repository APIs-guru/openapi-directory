import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListRunsRequest
/** 
 * Represents a request to the list runs operation.
**/
export class ListRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
