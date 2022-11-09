import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cpu
/** 
 * Represents the amount of CPU that an app is using on a physical device. Does not represent system-wide CPU usage.
**/
export class Cpu extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=clock" })
  clock?: number;

  @Metadata({ data: "json, name=frequency" })
  frequency?: string;
}
