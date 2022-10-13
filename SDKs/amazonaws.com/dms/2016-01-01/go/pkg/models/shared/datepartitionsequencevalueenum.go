package shared

type DatePartitionSequenceValueEnum string

const (
	DatePartitionSequenceValueEnumYyyymmdd   DatePartitionSequenceValueEnum = "YYYYMMDD"
	DatePartitionSequenceValueEnumYyyymmddhh DatePartitionSequenceValueEnum = "YYYYMMDDHH"
	DatePartitionSequenceValueEnumYyyymm     DatePartitionSequenceValueEnum = "YYYYMM"
	DatePartitionSequenceValueEnumMmyyyydd   DatePartitionSequenceValueEnum = "MMYYYYDD"
	DatePartitionSequenceValueEnumDdmmyyyy   DatePartitionSequenceValueEnum = "DDMMYYYY"
)
