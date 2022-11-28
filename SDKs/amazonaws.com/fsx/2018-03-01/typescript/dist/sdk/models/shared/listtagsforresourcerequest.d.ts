import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for <code>ListTagsForResource</code> operation.
**/
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceArn: string;
}
