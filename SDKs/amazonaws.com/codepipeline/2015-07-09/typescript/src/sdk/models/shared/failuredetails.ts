import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureTypeEnum } from "./failuretypeenum";



// FailureDetails
/** 
 * Represents information about failure details.
**/
export class FailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FailureTypeEnum;
}
