package shared

// AwsService
//
//	An Amazon Web Service such as Amazon S3, CloudTrail, and so on.
type AwsService struct {
	ServiceName *string `json:"serviceName,omitempty"`
}
