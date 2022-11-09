import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Target
/** 
 * Returns information about a target for a pull request.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @Metadata({ data: "json, name=sourceReference" })
  sourceReference: string;
}
