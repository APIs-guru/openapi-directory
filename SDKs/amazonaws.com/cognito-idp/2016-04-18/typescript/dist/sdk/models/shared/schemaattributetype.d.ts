import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDataTypeEnum } from "./attributedatatypeenum";
import { NumberAttributeConstraintsType } from "./numberattributeconstraintstype";
import { StringAttributeConstraintsType } from "./stringattributeconstraintstype";
/**
 * Contains information about the schema attribute.
**/
export declare class SchemaAttributeType extends SpeakeasyBase {
    attributeDataType?: AttributeDataTypeEnum;
    developerOnlyAttribute?: boolean;
    mutable?: boolean;
    name?: string;
    numberAttributeConstraints?: NumberAttributeConstraintsType;
    required?: boolean;
    stringAttributeConstraints?: StringAttributeConstraintsType;
}
