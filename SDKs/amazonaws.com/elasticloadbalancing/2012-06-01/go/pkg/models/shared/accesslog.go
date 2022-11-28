package shared

// AccessLog
// Information about the <code>AccessLog</code> attribute.
type AccessLog struct {
	EmitInterval   *int64
	Enabled        bool
	S3BucketName   *string
	S3BucketPrefix *string
}
