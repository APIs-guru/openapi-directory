package shared

// SigV4Authorization
// For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
type SigV4Authorization struct {
	RoleArn       string `json:"roleArn"`
	ServiceName   string `json:"serviceName"`
	SigningRegion string `json:"signingRegion"`
}
