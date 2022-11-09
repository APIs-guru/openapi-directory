import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// UpdateDevicePoolRequest
/** 
 * Represents a request to the update device pool operation.
**/
export class UpdateDevicePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=clearMaxDevices" })
  clearMaxDevices?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules?: Rule[];
}
