package shared

type DescribeApplicationResponse struct {
	ApplicationArn            string               `json:"applicationArn"`
	ApplicationCreationDate   int64                `json:"applicationCreationDate"`
	ApplicationDescription    *string              `json:"applicationDescription"`
	ApplicationID             string               `json:"applicationId"`
	ApplicationLastUpdateDate int64                `json:"applicationLastUpdateDate"`
	ApplicationName           string               `json:"applicationName"`
	ApplicationState          ApplicationStateEnum `json:"applicationState"`
	ApplicationURL            string               `json:"applicationUrl"`
	ErrorMessage              *string              `json:"errorMessage"`
	RoleArn                   string               `json:"roleArn"`
	SsoClientID               *string              `json:"ssoClientId"`
	Tags                      map[string]string    `json:"tags"`
}
