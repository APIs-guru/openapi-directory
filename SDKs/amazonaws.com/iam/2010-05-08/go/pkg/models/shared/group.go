package shared

import (
	"time"
)

// Group
// <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
type Group struct {
	Arn        string
	CreateDate time.Time
	GroupID    string
	GroupName  string
	Path       string
}
