package shared

type DescribeUsersResult struct {
	Marker *string
	Users  []User
}
