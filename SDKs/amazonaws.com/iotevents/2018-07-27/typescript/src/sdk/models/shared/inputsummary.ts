import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputStatusEnum } from "./inputstatusenum";



// InputSummary
/** 
 * Information about the input.
**/
export class InputSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=inputArn" })
  inputArn?: string;

  @SpeakeasyMetadata({ data: "json, name=inputDescription" })
  inputDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InputStatusEnum;
}
