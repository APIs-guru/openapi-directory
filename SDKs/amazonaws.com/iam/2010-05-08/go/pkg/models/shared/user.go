package shared

import (
	"time"
)

// User
// <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
type User struct {
	Arn                 string
	CreateDate          time.Time
	PasswordLastUsed    *time.Time
	Path                string
	PermissionsBoundary *AttachedPermissionsBoundary
	Tags                []Tag
	UserID              string
	UserName            string
}
