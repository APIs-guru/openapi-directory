package shared

import (
	"time"
)

// InstanceProfile
// <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
type InstanceProfile struct {
	Arn                 string
	CreateDate          time.Time
	InstanceProfileID   string
	InstanceProfileName string
	Path                string
	Roles               []Role
	Tags                []Tag
}
