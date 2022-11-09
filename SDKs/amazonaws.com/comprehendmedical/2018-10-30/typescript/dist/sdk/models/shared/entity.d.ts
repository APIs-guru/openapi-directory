import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { EntityTypeEnum } from "./entitytypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";
/**
 *  Provides information about an extracted medical entity.
**/
export declare class Entity extends SpeakeasyBase {
    attributes?: Attribute[];
    beginOffset?: number;
    category?: EntityTypeEnum;
    endOffset?: number;
    id?: number;
    score?: number;
    text?: string;
    traits?: Trait[];
    type?: EntitySubTypeEnum;
}
