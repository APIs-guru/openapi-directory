import { SpeakeasyBase } from "../../../internal/utils";
import { LinkAttributeAction } from "./linkattributeaction";
import { AttributeKey } from "./attributekey";
/**
 * Structure that contains attribute update information.
**/
export declare class LinkAttributeUpdate extends SpeakeasyBase {
    attributeAction?: LinkAttributeAction;
    attributeKey?: AttributeKey;
}
