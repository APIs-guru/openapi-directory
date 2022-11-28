package shared

// ThirdPartySourceRepository
//
//	Information about a third-party source repository connected to CodeGuru Reviewer.
type ThirdPartySourceRepository struct {
	ConnectionArn string `json:"ConnectionArn"`
	Name          string `json:"Name"`
	Owner         string `json:"Owner"`
}
