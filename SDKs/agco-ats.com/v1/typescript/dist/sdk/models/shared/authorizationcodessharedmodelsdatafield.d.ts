import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizationCodesSharedModelsDataFieldTypeEnum {
    Boolean = "Boolean",
    Decimal = "Decimal",
    Float = "Float",
    VariableLengthByteArray = "VariableLengthByteArray"
}
export declare class AuthorizationCodesSharedModelsDataField extends SpeakeasyBase {
    digitsPrecision?: number;
    maxExponent?: number;
    maxValue?: number;
    minExponent?: number;
    minValue?: number;
    name: string;
    scaleFactor?: number;
    signed?: boolean;
    type: AuthorizationCodesSharedModelsDataFieldTypeEnum;
}
