package shared

import (
	"time"
)

type GetPolicyResponse struct {
	CreationDate     *time.Time `json:"creationDate"`
	DefaultVersionID *string    `json:"defaultVersionId"`
	GenerationID     *string    `json:"generationId"`
	LastModifiedDate *time.Time `json:"lastModifiedDate"`
	PolicyArn        *string    `json:"policyArn"`
	PolicyDocument   *string    `json:"policyDocument"`
	PolicyName       *string    `json:"policyName"`
}
