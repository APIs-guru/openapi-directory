import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingStrategy } from "./routingstrategy";


// UpdateAliasInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateAliasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RoutingStrategy" })
  routingStrategy?: RoutingStrategy;
}
