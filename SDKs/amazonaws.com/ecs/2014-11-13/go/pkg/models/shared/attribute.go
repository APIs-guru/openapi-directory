package shared

// Attribute
// An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type Attribute struct {
	Name       string          `json:"name"`
	TargetID   *string         `json:"targetId,omitempty"`
	TargetType *TargetTypeEnum `json:"targetType,omitempty"`
	Value      *string         `json:"value,omitempty"`
}
