package shared

// ServiceAccountCredentials
// Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
type ServiceAccountCredentials struct {
	AccountName     string `json:"AccountName"`
	AccountPassword string `json:"AccountPassword"`
}
