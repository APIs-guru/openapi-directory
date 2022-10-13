package shared

type ColumnStatisticsData struct {
	BinaryColumnStatisticsData  *BinaryColumnStatisticsData  `json:"BinaryColumnStatisticsData"`
	BooleanColumnStatisticsData *BooleanColumnStatisticsData `json:"BooleanColumnStatisticsData"`
	DateColumnStatisticsData    *DateColumnStatisticsData    `json:"DateColumnStatisticsData"`
	DecimalColumnStatisticsData *DecimalColumnStatisticsData `json:"DecimalColumnStatisticsData"`
	DoubleColumnStatisticsData  *DoubleColumnStatisticsData  `json:"DoubleColumnStatisticsData"`
	LongColumnStatisticsData    *LongColumnStatisticsData    `json:"LongColumnStatisticsData"`
	StringColumnStatisticsData  *StringColumnStatisticsData  `json:"StringColumnStatisticsData"`
	Type                        ColumnStatisticsTypeEnum     `json:"Type"`
}
