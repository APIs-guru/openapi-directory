package shared



type ColumnStatisticsData struct {
    BinaryColumnStatisticsData *BinaryColumnStatisticsData `json:"BinaryColumnStatisticsData,omitempty"`
    BooleanColumnStatisticsData *BooleanColumnStatisticsData `json:"BooleanColumnStatisticsData,omitempty"`
    DateColumnStatisticsData *DateColumnStatisticsData `json:"DateColumnStatisticsData,omitempty"`
    DecimalColumnStatisticsData *DecimalColumnStatisticsData `json:"DecimalColumnStatisticsData,omitempty"`
    DoubleColumnStatisticsData *DoubleColumnStatisticsData `json:"DoubleColumnStatisticsData,omitempty"`
    LongColumnStatisticsData *LongColumnStatisticsData `json:"LongColumnStatisticsData,omitempty"`
    StringColumnStatisticsData *StringColumnStatisticsData `json:"StringColumnStatisticsData,omitempty"`
    Type ColumnStatisticsTypeEnum `json:"Type"`
    
}

