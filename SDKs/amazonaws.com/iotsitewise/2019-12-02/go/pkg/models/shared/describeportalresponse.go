package shared

import (
"time")

type DescribePortalResponse struct {
    Alarms *Alarms `json:"alarms,omitempty"`
    NotificationSenderEmail *string `json:"notificationSenderEmail,omitempty"`
    PortalArn string `json:"portalArn"`
    PortalAuthMode *AuthModeEnum `json:"portalAuthMode,omitempty"`
    PortalClientID string `json:"portalClientId"`
    PortalContactEmail string `json:"portalContactEmail"`
    PortalCreationDate time.Time `json:"portalCreationDate"`
    PortalDescription *string `json:"portalDescription,omitempty"`
    PortalID string `json:"portalId"`
    PortalLastUpdateDate time.Time `json:"portalLastUpdateDate"`
    PortalLogoImageLocation *ImageLocation `json:"portalLogoImageLocation,omitempty"`
    PortalName string `json:"portalName"`
    PortalStartURL string `json:"portalStartUrl"`
    PortalStatus PortalStatus `json:"portalStatus"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

