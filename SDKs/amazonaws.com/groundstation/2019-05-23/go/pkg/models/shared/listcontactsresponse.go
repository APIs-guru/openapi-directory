package shared

type ListContactsResponse struct {
	ContactList []ContactData `json:"contactList,omitempty"`
	NextToken   *string       `json:"nextToken,omitempty"`
}
