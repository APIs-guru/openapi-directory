import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a list of trail tags to return.
**/
export declare class ListTagsRequest extends SpeakeasyBase {
    nextToken?: string;
    resourceIdList: string[];
}
