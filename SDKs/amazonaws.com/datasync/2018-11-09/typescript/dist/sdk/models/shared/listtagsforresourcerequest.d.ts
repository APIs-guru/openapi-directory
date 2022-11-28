import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ListTagsForResourceRequest
**/
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceArn: string;
}
