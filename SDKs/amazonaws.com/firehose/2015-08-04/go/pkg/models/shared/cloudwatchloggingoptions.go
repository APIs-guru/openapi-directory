package shared

type CloudWatchLoggingOptions struct {
	Enabled       *bool   `json:"Enabled"`
	LogGroupName  *string `json:"LogGroupName"`
	LogStreamName *string `json:"LogStreamName"`
}
