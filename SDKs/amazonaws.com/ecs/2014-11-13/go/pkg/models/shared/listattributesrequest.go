package shared

type ListAttributesRequest struct {
	AttributeName  *string        `json:"attributeName,omitempty"`
	AttributeValue *string        `json:"attributeValue,omitempty"`
	Cluster        *string        `json:"cluster,omitempty"`
	MaxResults     *int64         `json:"maxResults,omitempty"`
	NextToken      *string        `json:"nextToken,omitempty"`
	TargetType     TargetTypeEnum `json:"targetType"`
}
