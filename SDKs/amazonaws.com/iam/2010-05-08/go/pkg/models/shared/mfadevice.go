package shared

import (
	"time"
)

// MfaDevice
// <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
type MfaDevice struct {
	EnableDate   time.Time
	SerialNumber string
	UserName     string
}
