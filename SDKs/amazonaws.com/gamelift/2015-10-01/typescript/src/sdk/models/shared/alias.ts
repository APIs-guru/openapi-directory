import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoutingStrategy } from "./routingstrategy";


// Alias
/** 
 * <p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasArn" })
  aliasArn?: string;

  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RoutingStrategy" })
  routingStrategy?: RoutingStrategy;
}
