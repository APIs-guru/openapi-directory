import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
export declare class PutAttributesRequest extends SpeakeasyBase {
    attributes: Attribute[];
    cluster?: string;
}
