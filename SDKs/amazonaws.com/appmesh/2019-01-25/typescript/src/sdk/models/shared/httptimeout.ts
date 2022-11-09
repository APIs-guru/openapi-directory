import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";
import { Duration } from "./duration";


// HttpTimeout
/** 
 * An object that represents types of timeouts. 
**/
export class HttpTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=idle" })
  idle?: Duration;

  @Metadata({ data: "json, name=perRequest" })
  perRequest?: Duration;
}
