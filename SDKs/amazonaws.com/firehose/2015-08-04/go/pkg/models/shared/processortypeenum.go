package shared




type ProcessorTypeEnum string

const (
    ProcessorTypeEnumRecordDeAggregation ProcessorTypeEnum = "RecordDeAggregation"
ProcessorTypeEnumLambda ProcessorTypeEnum = "Lambda"
ProcessorTypeEnumMetadataExtraction ProcessorTypeEnum = "MetadataExtraction"
ProcessorTypeEnumAppendDelimiterToRecord ProcessorTypeEnum = "AppendDelimiterToRecord"
)


