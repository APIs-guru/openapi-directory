import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The request object for the <code>TagResource</code> operation.
**/
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceArn: string;
    tags: Tag[];
}
