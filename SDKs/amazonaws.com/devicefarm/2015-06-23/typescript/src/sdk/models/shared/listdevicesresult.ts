import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// ListDevicesResult
/** 
 * Represents the result of a list devices operation.
**/
export class ListDevicesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: Device })
  devices?: Device[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
