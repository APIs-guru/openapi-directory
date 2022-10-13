package shared

import (
	"time"
)

type DescribePortalResponse struct {
	Alarms                  *Alarms        `json:"alarms"`
	NotificationSenderEmail *string        `json:"notificationSenderEmail"`
	PortalArn               string         `json:"portalArn"`
	PortalAuthMode          *AuthModeEnum  `json:"portalAuthMode"`
	PortalClientID          string         `json:"portalClientId"`
	PortalContactEmail      string         `json:"portalContactEmail"`
	PortalCreationDate      time.Time      `json:"portalCreationDate"`
	PortalDescription       *string        `json:"portalDescription"`
	PortalID                string         `json:"portalId"`
	PortalLastUpdateDate    time.Time      `json:"portalLastUpdateDate"`
	PortalLogoImageLocation *ImageLocation `json:"portalLogoImageLocation"`
	PortalName              string         `json:"portalName"`
	PortalStartURL          string         `json:"portalStartUrl"`
	PortalStatus            PortalStatus   `json:"portalStatus"`
	RoleArn                 *string        `json:"roleArn"`
}
