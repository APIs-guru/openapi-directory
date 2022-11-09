import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// ListDevicesResult
/** 
 * Represents the result of a list devices operation.
**/
export class ListDevicesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
