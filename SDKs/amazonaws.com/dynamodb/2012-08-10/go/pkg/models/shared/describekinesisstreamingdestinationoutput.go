package shared

type DescribeKinesisStreamingDestinationOutput struct {
	KinesisDataStreamDestinations []KinesisDataStreamDestination `json:"KinesisDataStreamDestinations"`
	TableName                     *string                        `json:"TableName"`
}
