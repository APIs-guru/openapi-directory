import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
export declare class AddAttributesToFindingsRequest extends SpeakeasyBase {
    attributes: Attribute[];
    findingArns: string[];
}
