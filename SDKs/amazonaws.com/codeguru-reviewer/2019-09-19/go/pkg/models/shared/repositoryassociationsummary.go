package shared

import (
	"time"
)

// RepositoryAssociationSummary
// Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
type RepositoryAssociationSummary struct {
	AssociationArn       *string                         `json:"AssociationArn,omitempty"`
	AssociationID        *string                         `json:"AssociationId,omitempty"`
	ConnectionArn        *string                         `json:"ConnectionArn,omitempty"`
	LastUpdatedTimeStamp *time.Time                      `json:"LastUpdatedTimeStamp,omitempty"`
	Name                 *string                         `json:"Name,omitempty"`
	Owner                *string                         `json:"Owner,omitempty"`
	ProviderType         *ProviderTypeEnum               `json:"ProviderType,omitempty"`
	State                *RepositoryAssociationStateEnum `json:"State,omitempty"`
}
