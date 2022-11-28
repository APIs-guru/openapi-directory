package shared

// CodeSigning
// Describes the method to use when code signing a file.
type CodeSigning struct {
	AwsSignerJobID           *string                   `json:"awsSignerJobId,omitempty"`
	CustomCodeSigning        *CustomCodeSigning        `json:"customCodeSigning,omitempty"`
	StartSigningJobParameter *StartSigningJobParameter `json:"startSigningJobParameter,omitempty"`
}
