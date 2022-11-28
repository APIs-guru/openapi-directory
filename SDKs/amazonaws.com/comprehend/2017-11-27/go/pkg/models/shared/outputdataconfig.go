package shared

// OutputDataConfig
// <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
type OutputDataConfig struct {
	KmsKeyID *string `json:"KmsKeyId,omitempty"`
	S3URI    string  `json:"S3Uri"`
}
