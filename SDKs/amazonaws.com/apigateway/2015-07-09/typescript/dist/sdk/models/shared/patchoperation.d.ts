import { SpeakeasyBase } from "../../../internal/utils";
import { OpEnum } from "./openum";
/**
 * A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
**/
export declare class PatchOperation extends SpeakeasyBase {
    from?: string;
    op?: OpEnum;
    path?: string;
    value?: string;
}
