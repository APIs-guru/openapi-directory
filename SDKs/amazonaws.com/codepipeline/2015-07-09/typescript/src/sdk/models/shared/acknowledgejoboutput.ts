import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// AcknowledgeJobOutput
/** 
 * Represents the output of an AcknowledgeJob action.
**/
export class AcknowledgeJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
