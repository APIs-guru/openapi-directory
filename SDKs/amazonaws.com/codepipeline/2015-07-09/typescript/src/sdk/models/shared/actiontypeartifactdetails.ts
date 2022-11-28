import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTypeArtifactDetails
/** 
 * Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
**/
export class ActionTypeArtifactDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximumCount" })
  maximumCount: number;

  @SpeakeasyMetadata({ data: "json, name=minimumCount" })
  minimumCount: number;
}
