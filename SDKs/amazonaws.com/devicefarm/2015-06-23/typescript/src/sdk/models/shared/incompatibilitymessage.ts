import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceAttributeEnum } from "./deviceattributeenum";



// IncompatibilityMessage
/** 
 * Represents information about incompatibility.
**/
export class IncompatibilityMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeviceAttributeEnum;
}
