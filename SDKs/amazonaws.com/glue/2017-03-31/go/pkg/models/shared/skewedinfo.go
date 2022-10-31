package shared



type SkewedInfo struct {
    SkewedColumnNames []string `json:"SkewedColumnNames,omitempty"`
    SkewedColumnValueLocationMaps map[string]string `json:"SkewedColumnValueLocationMaps,omitempty"`
    SkewedColumnValues []string `json:"SkewedColumnValues,omitempty"`
    
}

