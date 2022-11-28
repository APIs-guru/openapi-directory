package shared

// TransactGetItem
// Specifies an item to be retrieved as part of the transaction.
type TransactGetItem struct {
	Get Get `json:"Get"`
}
