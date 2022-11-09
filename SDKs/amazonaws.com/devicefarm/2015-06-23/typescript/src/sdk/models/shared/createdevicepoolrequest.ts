import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// CreateDevicePoolRequest
/** 
 * Represents a request to the create device pool operation.
**/
export class CreateDevicePoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=maxDevices" })
  maxDevices?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules: Rule[];
}
