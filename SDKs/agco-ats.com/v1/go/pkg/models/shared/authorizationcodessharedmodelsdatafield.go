package shared

type AuthorizationCodesSharedModelsDataFieldTypeEnum string

const (
	AuthorizationCodesSharedModelsDataFieldTypeEnumBoolean                 AuthorizationCodesSharedModelsDataFieldTypeEnum = "Boolean"
	AuthorizationCodesSharedModelsDataFieldTypeEnumDecimal                 AuthorizationCodesSharedModelsDataFieldTypeEnum = "Decimal"
	AuthorizationCodesSharedModelsDataFieldTypeEnumFloat                   AuthorizationCodesSharedModelsDataFieldTypeEnum = "Float"
	AuthorizationCodesSharedModelsDataFieldTypeEnumVariableLengthByteArray AuthorizationCodesSharedModelsDataFieldTypeEnum = "VariableLengthByteArray"
)

type AuthorizationCodesSharedModelsDataField struct {
	DigitsPrecision *int32                                          `json:"DigitsPrecision"`
	MaxExponent     *int32                                          `json:"MaxExponent"`
	MaxValue        *float64                                        `json:"MaxValue"`
	MinExponent     *int32                                          `json:"MinExponent"`
	MinValue        *float64                                        `json:"MinValue"`
	Name            string                                          `json:"Name"`
	ScaleFactor     *float64                                        `json:"ScaleFactor"`
	Signed          *bool                                           `json:"Signed"`
	Type            AuthorizationCodesSharedModelsDataFieldTypeEnum `json:"Type"`
}
