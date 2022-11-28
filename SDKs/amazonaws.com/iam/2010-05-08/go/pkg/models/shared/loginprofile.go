package shared

import (
	"time"
)

// LoginProfile
// <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
type LoginProfile struct {
	CreateDate            time.Time
	PasswordResetRequired *bool
	UserName              string
}
