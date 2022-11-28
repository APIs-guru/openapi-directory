import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorStateDefinition } from "./detectorstatedefinition";



// UpdateDetectorRequest
/** 
 * Information used to update the detector (instance).
**/
export class UpdateDetectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: DetectorStateDefinition;
}
