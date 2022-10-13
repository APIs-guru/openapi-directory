package shared

import (
	"time"
)

type RepositoryAssociation struct {
	AssociationArn       *string                         `json:"AssociationArn"`
	AssociationID        *string                         `json:"AssociationId"`
	ConnectionArn        *string                         `json:"ConnectionArn"`
	CreatedTimeStamp     *time.Time                      `json:"CreatedTimeStamp"`
	KmsKeyDetails        *KmsKeyDetails                  `json:"KMSKeyDetails"`
	LastUpdatedTimeStamp *time.Time                      `json:"LastUpdatedTimeStamp"`
	Name                 *string                         `json:"Name"`
	Owner                *string                         `json:"Owner"`
	ProviderType         *ProviderTypeEnum               `json:"ProviderType"`
	S3RepositoryDetails  *S3RepositoryDetails            `json:"S3RepositoryDetails"`
	State                *RepositoryAssociationStateEnum `json:"State"`
	StateReason          *string                         `json:"StateReason"`
}
