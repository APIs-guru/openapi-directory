package shared

type CodeSigning struct {
	AwsSignerJobID           *string                   `json:"awsSignerJobId"`
	CustomCodeSigning        *CustomCodeSigning        `json:"customCodeSigning"`
	StartSigningJobParameter *StartSigningJobParameter `json:"startSigningJobParameter"`
}
