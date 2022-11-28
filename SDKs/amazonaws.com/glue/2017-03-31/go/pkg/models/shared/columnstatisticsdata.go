package shared

// ColumnStatisticsData
// Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
type ColumnStatisticsData struct {
	BinaryColumnStatisticsData  *BinaryColumnStatisticsData  `json:"BinaryColumnStatisticsData,omitempty"`
	BooleanColumnStatisticsData *BooleanColumnStatisticsData `json:"BooleanColumnStatisticsData,omitempty"`
	DateColumnStatisticsData    *DateColumnStatisticsData    `json:"DateColumnStatisticsData,omitempty"`
	DecimalColumnStatisticsData *DecimalColumnStatisticsData `json:"DecimalColumnStatisticsData,omitempty"`
	DoubleColumnStatisticsData  *DoubleColumnStatisticsData  `json:"DoubleColumnStatisticsData,omitempty"`
	LongColumnStatisticsData    *LongColumnStatisticsData    `json:"LongColumnStatisticsData,omitempty"`
	StringColumnStatisticsData  *StringColumnStatisticsData  `json:"StringColumnStatisticsData,omitempty"`
	Type                        ColumnStatisticsTypeEnum     `json:"Type"`
}
