import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListSuitesRequest
/** 
 * Represents a request to the list suites operation.
**/
export class ListSuitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
