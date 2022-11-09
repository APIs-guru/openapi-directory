import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// AcknowledgeJobOutput
/** 
 * Represents the output of an AcknowledgeJob action.
**/
export class AcknowledgeJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;
}
