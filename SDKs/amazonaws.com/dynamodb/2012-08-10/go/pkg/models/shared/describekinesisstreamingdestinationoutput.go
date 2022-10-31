package shared



type DescribeKinesisStreamingDestinationOutput struct {
    KinesisDataStreamDestinations []KinesisDataStreamDestination `json:"KinesisDataStreamDestinations,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

