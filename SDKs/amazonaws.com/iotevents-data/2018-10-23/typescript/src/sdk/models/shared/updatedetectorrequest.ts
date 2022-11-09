import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorStateDefinition } from "./detectorstatedefinition";


// UpdateDetectorRequest
/** 
 * Information used to update the detector (instance).
**/
export class UpdateDetectorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=messageId" })
  messageId: string;

  @Metadata({ data: "json, name=state" })
  state: DetectorStateDefinition;
}
