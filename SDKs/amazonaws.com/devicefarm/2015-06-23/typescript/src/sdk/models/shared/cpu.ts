import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cpu
/** 
 * Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
**/
export class Cpu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=clock" })
  clock?: number;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;
}
