import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";



// UpdateAliasInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateAliasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingStrategy" })
  routingStrategy?: RoutingStrategy;
}
