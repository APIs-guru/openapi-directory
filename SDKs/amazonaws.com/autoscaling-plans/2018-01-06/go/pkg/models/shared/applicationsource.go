package shared

type ApplicationSource struct {
	CloudFormationStackArn *string     `json:"CloudFormationStackARN"`
	TagFilters             []TagFilter `json:"TagFilters"`
}
