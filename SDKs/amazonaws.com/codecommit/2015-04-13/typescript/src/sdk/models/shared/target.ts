import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Target
/** 
 * Returns information about a target for a pull request.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceReference" })
  sourceReference: string;
}
