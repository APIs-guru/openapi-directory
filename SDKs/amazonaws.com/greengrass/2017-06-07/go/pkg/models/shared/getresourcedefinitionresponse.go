package shared

type GetResourceDefinitionResponse struct {
	Arn                  *string           `json:"Arn"`
	CreationTimestamp    *string           `json:"CreationTimestamp"`
	ID                   *string           `json:"Id"`
	LastUpdatedTimestamp *string           `json:"LastUpdatedTimestamp"`
	LatestVersion        *string           `json:"LatestVersion"`
	LatestVersionArn     *string           `json:"LatestVersionArn"`
	Name                 *string           `json:"Name"`
	Tags                 map[string]string `json:"tags"`
}
