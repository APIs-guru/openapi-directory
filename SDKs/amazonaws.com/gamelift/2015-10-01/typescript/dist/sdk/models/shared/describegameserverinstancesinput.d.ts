import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeGameServerInstancesInput extends SpeakeasyBase {
    gameServerGroupName: string;
    instanceIds?: string[];
    limit?: number;
    nextToken?: string;
}
