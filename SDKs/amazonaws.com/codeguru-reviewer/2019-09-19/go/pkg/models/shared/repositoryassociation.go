package shared

import (
	"time"
)

type RepositoryAssociation struct {
	AssociationArn       *string                         `json:"AssociationArn,omitempty"`
	AssociationID        *string                         `json:"AssociationId,omitempty"`
	ConnectionArn        *string                         `json:"ConnectionArn,omitempty"`
	CreatedTimeStamp     *time.Time                      `json:"CreatedTimeStamp,omitempty"`
	KmsKeyDetails        *KmsKeyDetails                  `json:"KMSKeyDetails,omitempty"`
	LastUpdatedTimeStamp *time.Time                      `json:"LastUpdatedTimeStamp,omitempty"`
	Name                 *string                         `json:"Name,omitempty"`
	Owner                *string                         `json:"Owner,omitempty"`
	ProviderType         *ProviderTypeEnum               `json:"ProviderType,omitempty"`
	S3RepositoryDetails  *S3RepositoryDetails            `json:"S3RepositoryDetails,omitempty"`
	State                *RepositoryAssociationStateEnum `json:"State,omitempty"`
	StateReason          *string                         `json:"StateReason,omitempty"`
}
