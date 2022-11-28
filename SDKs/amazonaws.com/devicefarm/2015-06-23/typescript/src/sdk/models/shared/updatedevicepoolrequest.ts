import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// UpdateDevicePoolRequest
/** 
 * Represents a request to the update device pool operation.
**/
export class UpdateDevicePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=clearMaxDevices" })
  clearMaxDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];
}
