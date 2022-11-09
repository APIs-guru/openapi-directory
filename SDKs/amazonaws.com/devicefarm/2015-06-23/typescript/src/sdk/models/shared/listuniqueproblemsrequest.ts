import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListUniqueProblemsRequest
/** 
 * Represents a request to the list unique problems operation.
**/
export class ListUniqueProblemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
