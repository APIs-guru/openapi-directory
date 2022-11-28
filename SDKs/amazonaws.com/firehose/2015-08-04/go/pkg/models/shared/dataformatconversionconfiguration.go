package shared

// DataFormatConversionConfiguration
// Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.
type DataFormatConversionConfiguration struct {
	Enabled                   *bool                      `json:"Enabled,omitempty"`
	InputFormatConfiguration  *InputFormatConfiguration  `json:"InputFormatConfiguration,omitempty"`
	OutputFormatConfiguration *OutputFormatConfiguration `json:"OutputFormatConfiguration,omitempty"`
	SchemaConfiguration       *SchemaConfiguration       `json:"SchemaConfiguration,omitempty"`
}
