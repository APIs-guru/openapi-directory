import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureTypeEnum } from "./failuretypeenum";


// FailureDetails
/** 
 * Represents information about failure details.
**/
export class FailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=type" })
  type: FailureTypeEnum;
}
