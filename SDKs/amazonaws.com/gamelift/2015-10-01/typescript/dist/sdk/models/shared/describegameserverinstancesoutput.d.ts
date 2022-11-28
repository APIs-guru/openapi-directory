import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerInstance } from "./gameserverinstance";
export declare class DescribeGameServerInstancesOutput extends SpeakeasyBase {
    gameServerInstances?: GameServerInstance[];
    nextToken?: string;
}
