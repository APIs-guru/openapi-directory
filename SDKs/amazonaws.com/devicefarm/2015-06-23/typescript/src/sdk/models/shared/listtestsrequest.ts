import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTestsRequest
/** 
 * Represents a request to the list tests operation.
**/
export class ListTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
