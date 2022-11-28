package shared

// ResourceCollectionFilter
//
//	Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
type ResourceCollectionFilter struct {
	CloudFormation *CloudFormationCollectionFilter `json:"CloudFormation,omitempty"`
}
