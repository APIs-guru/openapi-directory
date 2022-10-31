package shared



type AssetProperty struct {
    Alias *string `json:"alias,omitempty"`
    DataType PropertyDataTypeEnum `json:"dataType"`
    DataTypeSpec *string `json:"dataTypeSpec,omitempty"`
    ID string `json:"id"`
    Name string `json:"name"`
    Notification *PropertyNotification `json:"notification,omitempty"`
    Unit *string `json:"unit,omitempty"`
    
}

