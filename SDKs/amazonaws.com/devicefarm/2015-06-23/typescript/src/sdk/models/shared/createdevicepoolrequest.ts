import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// CreateDevicePoolRequest
/** 
 * Represents a request to the create device pool operation.
**/
export class CreateDevicePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules: Rule[];
}
