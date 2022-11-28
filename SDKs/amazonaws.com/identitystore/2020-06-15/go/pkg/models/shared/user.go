package shared

// User
// A user object, which contains a specified user’s metadata and attributes.
type User struct {
	UserID   string `json:"UserId"`
	UserName string `json:"UserName"`
}
