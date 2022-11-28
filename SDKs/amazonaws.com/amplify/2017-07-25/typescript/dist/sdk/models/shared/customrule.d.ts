import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Describes a custom rewrite or redirect rule.
**/
export declare class CustomRule extends SpeakeasyBase {
    condition?: string;
    source: string;
    status?: string;
    target: string;
}
