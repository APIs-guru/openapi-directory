package shared

type ListContactsResponse struct {
	ContactList []ContactData `json:"contactList"`
	NextToken   *string       `json:"nextToken"`
}
