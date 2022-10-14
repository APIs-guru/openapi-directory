package shared

type ResourceCollectionFilter struct {
	CloudFormation *CloudFormationCollectionFilter `json:"CloudFormation,omitempty"`
}
