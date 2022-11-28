import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html">ListTagsForResource</a> operation is called.
**/
export declare class TagListEntry extends SpeakeasyBase {
    key: string;
    value?: string;
}
