package shared




type AuthorizationCodesSharedModelsDataFieldTypeEnum string

const (
    AuthorizationCodesSharedModelsDataFieldTypeEnumBoolean AuthorizationCodesSharedModelsDataFieldTypeEnum = "Boolean"
AuthorizationCodesSharedModelsDataFieldTypeEnumDecimal AuthorizationCodesSharedModelsDataFieldTypeEnum = "Decimal"
AuthorizationCodesSharedModelsDataFieldTypeEnumFloat AuthorizationCodesSharedModelsDataFieldTypeEnum = "Float"
AuthorizationCodesSharedModelsDataFieldTypeEnumVariableLengthByteArray AuthorizationCodesSharedModelsDataFieldTypeEnum = "VariableLengthByteArray"
)


type AuthorizationCodesSharedModelsDataField struct {
    DigitsPrecision *int32 `json:"DigitsPrecision,omitempty"`
    MaxExponent *int32 `json:"MaxExponent,omitempty"`
    MaxValue *float64 `json:"MaxValue,omitempty"`
    MinExponent *int32 `json:"MinExponent,omitempty"`
    MinValue *float64 `json:"MinValue,omitempty"`
    Name string `json:"Name"`
    ScaleFactor *float64 `json:"ScaleFactor,omitempty"`
    Signed *bool `json:"Signed,omitempty"`
    Type AuthorizationCodesSharedModelsDataFieldTypeEnum `json:"Type"`
    
}

