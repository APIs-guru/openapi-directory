package shared

import (
	"time"
)

type GetPolicyVersionResponse struct {
	CreationDate     *time.Time `json:"creationDate"`
	GenerationID     *string    `json:"generationId"`
	IsDefaultVersion *bool      `json:"isDefaultVersion"`
	LastModifiedDate *time.Time `json:"lastModifiedDate"`
	PolicyArn        *string    `json:"policyArn"`
	PolicyDocument   *string    `json:"policyDocument"`
	PolicyName       *string    `json:"policyName"`
	PolicyVersionID  *string    `json:"policyVersionId"`
}
