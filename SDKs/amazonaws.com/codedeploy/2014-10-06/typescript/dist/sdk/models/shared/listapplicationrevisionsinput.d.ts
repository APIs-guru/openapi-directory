import { SpeakeasyBase } from "../../../internal/utils";
import { ListStateFilterActionEnum } from "./liststatefilteractionenum";
import { ApplicationRevisionSortByEnum } from "./applicationrevisionsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 *  Represents the input of a <code>ListApplicationRevisions</code> operation.
**/
export declare class ListApplicationRevisionsInput extends SpeakeasyBase {
    applicationName: string;
    deployed?: ListStateFilterActionEnum;
    nextToken?: string;
    s3Bucket?: string;
    s3KeyPrefix?: string;
    sortBy?: ApplicationRevisionSortByEnum;
    sortOrder?: SortOrderEnum;
}
