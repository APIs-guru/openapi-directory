import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoutingStrategy } from "./routingstrategy";
import { Tag } from "./tag";


// CreateAliasInput
/** 
 * Represents the input for a request operation.
**/
export class CreateAliasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RoutingStrategy" })
  routingStrategy: RoutingStrategy;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
