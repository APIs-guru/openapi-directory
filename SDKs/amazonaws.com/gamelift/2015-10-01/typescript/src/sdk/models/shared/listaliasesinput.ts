import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategyTypeEnum } from "./routingstrategytypeenum";



// ListAliasesInput
/** 
 * Represents the input for a request operation.
**/
export class ListAliasesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingStrategyType" })
  routingStrategyType?: RoutingStrategyTypeEnum;
}
