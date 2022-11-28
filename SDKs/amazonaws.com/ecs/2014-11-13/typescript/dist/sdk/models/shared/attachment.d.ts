import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
/**
 * An object representing a container instance or task attachment.
**/
export declare class Attachment extends SpeakeasyBase {
    details?: KeyValuePair[];
    id?: string;
    status?: string;
    type?: string;
}
