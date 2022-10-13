package shared

import (
	"time"
)

type RepositoryAssociationSummary struct {
	AssociationArn       *string                         `json:"AssociationArn"`
	AssociationID        *string                         `json:"AssociationId"`
	ConnectionArn        *string                         `json:"ConnectionArn"`
	LastUpdatedTimeStamp *time.Time                      `json:"LastUpdatedTimeStamp"`
	Name                 *string                         `json:"Name"`
	Owner                *string                         `json:"Owner"`
	ProviderType         *ProviderTypeEnum               `json:"ProviderType"`
	State                *RepositoryAssociationStateEnum `json:"State"`
}
