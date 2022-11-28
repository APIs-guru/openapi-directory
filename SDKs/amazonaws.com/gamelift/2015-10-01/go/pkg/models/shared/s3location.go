package shared

// S3Location
// The location in Amazon S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests.
type S3Location struct {
	Bucket        *string `json:"Bucket,omitempty"`
	Key           *string `json:"Key,omitempty"`
	ObjectVersion *string `json:"ObjectVersion,omitempty"`
	RoleArn       *string `json:"RoleArn,omitempty"`
}
