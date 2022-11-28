package shared

// Ulimit
// <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
type Ulimit struct {
	HardLimit int64  `json:"hardLimit"`
	Name      string `json:"name"`
	SoftLimit int64  `json:"softLimit"`
}
