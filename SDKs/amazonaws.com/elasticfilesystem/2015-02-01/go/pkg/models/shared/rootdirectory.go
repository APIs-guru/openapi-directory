package shared

type RootDirectory struct {
	CreationInfo *CreationInfo `json:"CreationInfo"`
	Path         *string       `json:"Path"`
}
