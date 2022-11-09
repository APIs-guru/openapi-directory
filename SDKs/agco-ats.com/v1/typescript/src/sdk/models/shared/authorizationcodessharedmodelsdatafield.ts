import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthorizationCodesSharedModelsDataFieldTypeEnum {
    Boolean = "Boolean"
,    Decimal = "Decimal"
,    Float = "Float"
,    VariableLengthByteArray = "VariableLengthByteArray"
}


export class AuthorizationCodesSharedModelsDataField extends SpeakeasyBase {
  @Metadata({ data: "json, name=DigitsPrecision" })
  digitsPrecision?: number;

  @Metadata({ data: "json, name=MaxExponent" })
  maxExponent?: number;

  @Metadata({ data: "json, name=MaxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=MinExponent" })
  minExponent?: number;

  @Metadata({ data: "json, name=MinValue" })
  minValue?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ScaleFactor" })
  scaleFactor?: number;

  @Metadata({ data: "json, name=Signed" })
  signed?: boolean;

  @Metadata({ data: "json, name=Type" })
  type: AuthorizationCodesSharedModelsDataFieldTypeEnum;
}
