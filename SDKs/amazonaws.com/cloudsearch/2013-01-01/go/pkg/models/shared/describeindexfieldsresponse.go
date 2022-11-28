package shared

// DescribeIndexFieldsResponse
// The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
type DescribeIndexFieldsResponse struct {
	IndexFields []IndexFieldStatus
}
