package shared

// KeysAndAttributes
// <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
type KeysAndAttributes struct {
	AttributesToGet          []string                    `json:"AttributesToGet,omitempty"`
	ConsistentRead           *bool                       `json:"ConsistentRead,omitempty"`
	ExpressionAttributeNames map[string]string           `json:"ExpressionAttributeNames,omitempty"`
	Keys                     []map[string]AttributeValue `json:"Keys"`
	ProjectionExpression     *string                     `json:"ProjectionExpression,omitempty"`
}
