package shared

// DefineIndexFieldResponse
// The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
type DefineIndexFieldResponse struct {
	IndexField IndexFieldStatus
}
