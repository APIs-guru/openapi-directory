import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizationCodesSharedModelsDataFieldTypeEnum {
    Boolean = "Boolean",
    Decimal = "Decimal",
    Float = "Float",
    VariableLengthByteArray = "VariableLengthByteArray"
}


export class AuthorizationCodesSharedModelsDataField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DigitsPrecision" })
  digitsPrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxExponent" })
  maxExponent?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=MinExponent" })
  minExponent?: number;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ScaleFactor" })
  scaleFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=Signed" })
  signed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: AuthorizationCodesSharedModelsDataFieldTypeEnum;
}
