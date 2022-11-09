import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputStatusEnum } from "./inputstatusenum";


// InputSummary
/** 
 * Information about the input.
**/
export class InputSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=inputArn" })
  inputArn?: string;

  @Metadata({ data: "json, name=inputDescription" })
  inputDescription?: string;

  @Metadata({ data: "json, name=inputName" })
  inputName?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: InputStatusEnum;
}
