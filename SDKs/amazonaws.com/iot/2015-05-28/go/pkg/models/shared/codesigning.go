package shared



type CodeSigning struct {
    AwsSignerJobID *string `json:"awsSignerJobId,omitempty"`
    CustomCodeSigning *CustomCodeSigning `json:"customCodeSigning,omitempty"`
    StartSigningJobParameter *StartSigningJobParameter `json:"startSigningJobParameter,omitempty"`
    
}

