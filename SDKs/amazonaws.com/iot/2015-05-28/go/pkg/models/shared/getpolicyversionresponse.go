package shared

import (
	"time"
)

type GetPolicyVersionResponse struct {
	CreationDate     *time.Time `json:"creationDate,omitempty"`
	GenerationID     *string    `json:"generationId,omitempty"`
	IsDefaultVersion *bool      `json:"isDefaultVersion,omitempty"`
	LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
	PolicyArn        *string    `json:"policyArn,omitempty"`
	PolicyDocument   *string    `json:"policyDocument,omitempty"`
	PolicyName       *string    `json:"policyName,omitempty"`
	PolicyVersionID  *string    `json:"policyVersionId,omitempty"`
}
