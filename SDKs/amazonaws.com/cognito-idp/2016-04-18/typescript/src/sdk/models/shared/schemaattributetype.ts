import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeDataTypeEnum } from "./attributedatatypeenum";
import { NumberAttributeConstraintsType } from "./numberattributeconstraintstype";
import { StringAttributeConstraintsType } from "./stringattributeconstraintstype";


// SchemaAttributeType
/** 
 * Contains information about the schema attribute.
**/
export class SchemaAttributeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeDataType" })
  attributeDataType?: AttributeDataTypeEnum;

  @Metadata({ data: "json, name=DeveloperOnlyAttribute" })
  developerOnlyAttribute?: boolean;

  @Metadata({ data: "json, name=Mutable" })
  mutable?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberAttributeConstraints" })
  numberAttributeConstraints?: NumberAttributeConstraintsType;

  @Metadata({ data: "json, name=Required" })
  required?: boolean;

  @Metadata({ data: "json, name=StringAttributeConstraints" })
  stringAttributeConstraints?: StringAttributeConstraintsType;
}
