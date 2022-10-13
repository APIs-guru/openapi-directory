package shared

import (
	"time"
)

type DescribeDashboardResponse struct {
	DashboardArn            string    `json:"dashboardArn"`
	DashboardCreationDate   time.Time `json:"dashboardCreationDate"`
	DashboardDefinition     string    `json:"dashboardDefinition"`
	DashboardDescription    *string   `json:"dashboardDescription"`
	DashboardID             string    `json:"dashboardId"`
	DashboardLastUpdateDate time.Time `json:"dashboardLastUpdateDate"`
	DashboardName           string    `json:"dashboardName"`
	ProjectID               string    `json:"projectId"`
}
