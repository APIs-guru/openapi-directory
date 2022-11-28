package shared

import (
	"time"
)

// WorkGroup
// A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
type WorkGroup struct {
	Configuration *WorkGroupConfiguration `json:"Configuration,omitempty"`
	CreationTime  *time.Time              `json:"CreationTime,omitempty"`
	Description   *string                 `json:"Description,omitempty"`
	Name          string                  `json:"Name"`
	State         *WorkGroupStateEnum     `json:"State,omitempty"`
}
