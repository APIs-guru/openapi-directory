package shared

// SourceAttribute
// Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
type SourceAttribute struct {
	SourceDataCopy      *SourceData
	SourceDataFunction  SourceDataFunctionEnum
	SourceDataMap       *SourceDataMap
	SourceDataTrimTitle *SourceDataTrimTitle
}
