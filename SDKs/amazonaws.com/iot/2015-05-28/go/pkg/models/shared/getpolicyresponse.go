package shared

import (
"time")

type GetPolicyResponse struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    DefaultVersionID *string `json:"defaultVersionId,omitempty"`
    GenerationID *string `json:"generationId,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    PolicyArn *string `json:"policyArn,omitempty"`
    PolicyDocument *string `json:"policyDocument,omitempty"`
    PolicyName *string `json:"policyName,omitempty"`
    
}

