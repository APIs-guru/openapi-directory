import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategyTypeEnum } from "./routingstrategytypeenum";



// RoutingStrategy
/** 
 * <p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class RoutingStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RoutingStrategyTypeEnum;
}
