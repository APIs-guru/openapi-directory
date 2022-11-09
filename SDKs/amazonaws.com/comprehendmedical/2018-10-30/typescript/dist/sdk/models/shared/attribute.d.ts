import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { RelationshipTypeEnum } from "./relationshiptypeenum";
import { Trait } from "./trait";
import { EntitySubTypeEnum } from "./entitysubtypeenum";
/**
 *  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.
**/
export declare class Attribute extends SpeakeasyBase {
    beginOffset?: number;
    category?: EntityTypeEnum;
    endOffset?: number;
    id?: number;
    relationshipScore?: number;
    relationshipType?: RelationshipTypeEnum;
    score?: number;
    text?: string;
    traits?: Trait[];
    type?: EntitySubTypeEnum;
}
