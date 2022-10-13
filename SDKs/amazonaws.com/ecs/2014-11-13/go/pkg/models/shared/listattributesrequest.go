package shared

type ListAttributesRequest struct {
	AttributeName  *string        `json:"attributeName"`
	AttributeValue *string        `json:"attributeValue"`
	Cluster        *string        `json:"cluster"`
	MaxResults     *int64         `json:"maxResults"`
	NextToken      *string        `json:"nextToken"`
	TargetType     TargetTypeEnum `json:"targetType"`
}
