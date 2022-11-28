import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDataTypeEnum } from "./attributedatatypeenum";
import { NumberAttributeConstraintsType } from "./numberattributeconstraintstype";
import { StringAttributeConstraintsType } from "./stringattributeconstraintstype";



// SchemaAttributeType
/** 
 * Contains information about the schema attribute.
**/
export class SchemaAttributeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeDataType" })
  attributeDataType?: AttributeDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DeveloperOnlyAttribute" })
  developerOnlyAttribute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Mutable" })
  mutable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberAttributeConstraints" })
  numberAttributeConstraints?: NumberAttributeConstraintsType;

  @SpeakeasyMetadata({ data: "json, name=Required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StringAttributeConstraints" })
  stringAttributeConstraints?: StringAttributeConstraintsType;
}
