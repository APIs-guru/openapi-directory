package shared

import (
	"time"
)

type DescribeProjectResponse struct {
	PortalID              string    `json:"portalId"`
	ProjectArn            string    `json:"projectArn"`
	ProjectCreationDate   time.Time `json:"projectCreationDate"`
	ProjectDescription    *string   `json:"projectDescription,omitempty"`
	ProjectID             string    `json:"projectId"`
	ProjectLastUpdateDate time.Time `json:"projectLastUpdateDate"`
	ProjectName           string    `json:"projectName"`
}
