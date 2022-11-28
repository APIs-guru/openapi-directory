import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";



// GrpcTimeout
/** 
 * An object that represents types of timeouts. 
**/
export class GrpcTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idle" })
  idle?: Duration;

  @SpeakeasyMetadata({ data: "json, name=perRequest" })
  perRequest?: Duration;
}
