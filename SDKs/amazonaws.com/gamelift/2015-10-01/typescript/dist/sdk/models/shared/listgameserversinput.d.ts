import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListGameServersInput extends SpeakeasyBase {
    gameServerGroupName: string;
    limit?: number;
    nextToken?: string;
    sortOrder?: SortOrderEnum;
}
