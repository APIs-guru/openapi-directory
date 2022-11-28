package shared

// Position
// <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
type Position struct {
	Column *int64
	Line   *int64
}
