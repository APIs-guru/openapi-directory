package shared

// OutputFormatConfiguration
// Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
type OutputFormatConfiguration struct {
	Serializer *Serializer `json:"Serializer,omitempty"`
}
