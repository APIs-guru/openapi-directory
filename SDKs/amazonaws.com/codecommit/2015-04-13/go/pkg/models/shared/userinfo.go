package shared

type UserInfo struct {
	Date  *string `json:"date,omitempty"`
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}
