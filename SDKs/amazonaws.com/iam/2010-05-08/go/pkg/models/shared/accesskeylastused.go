package shared

import (
	"time"
)

// AccessKeyLastUsed
// <p>Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
type AccessKeyLastUsed struct {
	LastUsedDate time.Time
	Region       string
	ServiceName  string
}
