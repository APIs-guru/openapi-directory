import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
**/
export declare class NotNodeException extends SpeakeasyBase {
    message?: string;
}
