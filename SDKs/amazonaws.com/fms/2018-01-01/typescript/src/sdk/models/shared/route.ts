import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { TargetTypeEnum } from "./targettypeenum";



// Route
/** 
 * Describes a route in a route table.
**/
export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationType" })
  destinationType?: DestinationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: TargetTypeEnum;
}
