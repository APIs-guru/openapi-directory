package shared

type CreateFunctionDefinitionResponse struct {
	Arn                  *string `json:"Arn,omitempty"`
	CreationTimestamp    *string `json:"CreationTimestamp,omitempty"`
	ID                   *string `json:"Id,omitempty"`
	LastUpdatedTimestamp *string `json:"LastUpdatedTimestamp,omitempty"`
	LatestVersion        *string `json:"LatestVersion,omitempty"`
	LatestVersionArn     *string `json:"LatestVersionArn,omitempty"`
	Name                 *string `json:"Name,omitempty"`
}
