import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Scope } from "./scope";
/**
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
**/
export declare class ExclusionPreview extends SpeakeasyBase {
    attributes?: Attribute[];
    description: string;
    recommendation: string;
    scopes: Scope[];
    title: string;
}
