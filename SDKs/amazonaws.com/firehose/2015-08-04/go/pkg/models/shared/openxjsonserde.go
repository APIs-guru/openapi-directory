package shared

type OpenXJSONSerDe struct {
	CaseInsensitive                    *bool             `json:"CaseInsensitive"`
	ColumnToJSONKeyMappings            map[string]string `json:"ColumnToJsonKeyMappings"`
	ConvertDotsInJSONKeysToUnderscores *bool             `json:"ConvertDotsInJsonKeysToUnderscores"`
}
