package shared

type ListVirtualInterfaceTestHistoryResponse struct {
	NextToken                   *string                       `json:"nextToken"`
	VirtualInterfaceTestHistory []VirtualInterfaceTestHistory `json:"virtualInterfaceTestHistory"`
}
