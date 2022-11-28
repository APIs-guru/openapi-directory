import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";
/**
 * <p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class Alias extends SpeakeasyBase {
    aliasArn?: string;
    aliasId?: string;
    creationTime?: Date;
    description?: string;
    lastUpdatedTime?: Date;
    name?: string;
    routingStrategy?: RoutingStrategy;
}
