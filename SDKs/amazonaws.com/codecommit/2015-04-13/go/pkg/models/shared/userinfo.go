package shared

// UserInfo
// Information about the user who made a specified commit.
type UserInfo struct {
	Date  *string `json:"date,omitempty"`
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}
