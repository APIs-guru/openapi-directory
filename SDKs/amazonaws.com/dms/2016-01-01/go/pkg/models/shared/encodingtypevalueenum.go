package shared

type EncodingTypeValueEnum string

const (
	EncodingTypeValueEnumPlain           EncodingTypeValueEnum = "plain"
	EncodingTypeValueEnumPlainDictionary EncodingTypeValueEnum = "plain-dictionary"
	EncodingTypeValueEnumRleDictionary   EncodingTypeValueEnum = "rle-dictionary"
)
