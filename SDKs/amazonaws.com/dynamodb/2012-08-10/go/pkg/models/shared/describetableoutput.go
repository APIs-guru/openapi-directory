package shared

// DescribeTableOutput
// Represents the output of a <code>DescribeTable</code> operation.
type DescribeTableOutput struct {
	Table *TableDescription `json:"Table,omitempty"`
}
