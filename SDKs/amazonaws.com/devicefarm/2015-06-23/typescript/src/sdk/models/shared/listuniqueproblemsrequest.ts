import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUniqueProblemsRequest
/** 
 * Represents a request to the list unique problems operation.
**/
export class ListUniqueProblemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
