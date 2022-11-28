import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";
import { Tag } from "./tag";



// CreateAliasInput
/** 
 * Represents the input for a request operation.
**/
export class CreateAliasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingStrategy" })
  routingStrategy: RoutingStrategy;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
