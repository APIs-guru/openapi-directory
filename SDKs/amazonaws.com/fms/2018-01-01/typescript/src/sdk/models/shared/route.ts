import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { TargetTypeEnum } from "./targettypeenum";


// Route
/** 
 * Describes a route in a route table.
**/
export class Route extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination?: string;

  @Metadata({ data: "json, name=DestinationType" })
  destinationType?: DestinationTypeEnum;

  @Metadata({ data: "json, name=Target" })
  target?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: TargetTypeEnum;
}
