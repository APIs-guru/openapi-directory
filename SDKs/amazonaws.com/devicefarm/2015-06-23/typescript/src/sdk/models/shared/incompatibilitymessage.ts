import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceAttributeEnum } from "./deviceattributeenum";


// IncompatibilityMessage
/** 
 * Represents information about incompatibility.
**/
export class IncompatibilityMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=type" })
  type?: DeviceAttributeEnum;
}
