import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { Tag } from "./tag";
export declare class PutPolicyRequest extends SpeakeasyBase {
    policy: Policy;
    tagList?: Tag[];
}
