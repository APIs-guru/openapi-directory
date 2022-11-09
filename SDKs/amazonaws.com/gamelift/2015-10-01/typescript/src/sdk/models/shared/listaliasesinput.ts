import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingStrategyTypeEnum } from "./routingstrategytypeenum";


// ListAliasesInput
/** 
 * Represents the input for a request operation.
**/
export class ListAliasesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RoutingStrategyType" })
  routingStrategyType?: RoutingStrategyTypeEnum;
}
