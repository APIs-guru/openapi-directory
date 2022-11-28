package shared

// ListContactsResponse
// <p/>
type ListContactsResponse struct {
	ContactList []ContactData `json:"contactList,omitempty"`
	NextToken   *string       `json:"nextToken,omitempty"`
}
