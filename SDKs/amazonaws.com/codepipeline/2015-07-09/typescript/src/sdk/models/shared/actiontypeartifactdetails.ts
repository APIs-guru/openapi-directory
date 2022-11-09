import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTypeArtifactDetails
/** 
 * Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
**/
export class ActionTypeArtifactDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumCount" })
  maximumCount: number;

  @Metadata({ data: "json, name=minimumCount" })
  minimumCount: number;
}
