import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListBuildsForProjectInput extends SpeakeasyBase {
    nextToken?: string;
    projectName: string;
    sortOrder?: SortOrderTypeEnum;
}
