import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListSamplesRequest
/** 
 * Represents a request to the list samples operation.
**/
export class ListSamplesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
