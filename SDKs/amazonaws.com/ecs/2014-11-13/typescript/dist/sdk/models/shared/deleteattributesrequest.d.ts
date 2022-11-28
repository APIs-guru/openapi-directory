import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
export declare class DeleteAttributesRequest extends SpeakeasyBase {
    attributes: Attribute[];
    cluster?: string;
}
