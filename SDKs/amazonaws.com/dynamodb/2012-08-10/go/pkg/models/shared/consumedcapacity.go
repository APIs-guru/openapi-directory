package shared

// ConsumedCapacity
// The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
type ConsumedCapacity struct {
	CapacityUnits          *float64            `json:"CapacityUnits,omitempty"`
	GlobalSecondaryIndexes map[string]Capacity `json:"GlobalSecondaryIndexes,omitempty"`
	LocalSecondaryIndexes  map[string]Capacity `json:"LocalSecondaryIndexes,omitempty"`
	ReadCapacityUnits      *float64            `json:"ReadCapacityUnits,omitempty"`
	Table                  *Capacity           `json:"Table,omitempty"`
	TableName              *string             `json:"TableName,omitempty"`
	WriteCapacityUnits     *float64            `json:"WriteCapacityUnits,omitempty"`
}
