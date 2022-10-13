package shared

import (
	"time"
)

type AccessPreviewFinding struct {
	Action                []string              `json:"action"`
	ChangeType            FindingChangeTypeEnum `json:"changeType"`
	Condition             map[string]string     `json:"condition"`
	CreatedAt             time.Time             `json:"createdAt"`
	Error                 *string               `json:"error"`
	ExistingFindingID     *string               `json:"existingFindingId"`
	ExistingFindingStatus *FindingStatusEnum    `json:"existingFindingStatus"`
	ID                    string                `json:"id"`
	IsPublic              *bool                 `json:"isPublic"`
	Principal             map[string]string     `json:"principal"`
	Resource              *string               `json:"resource"`
	ResourceOwnerAccount  string                `json:"resourceOwnerAccount"`
	ResourceType          ResourceTypeEnum      `json:"resourceType"`
	Sources               []FindingSource       `json:"sources"`
	Status                FindingStatusEnum     `json:"status"`
}
