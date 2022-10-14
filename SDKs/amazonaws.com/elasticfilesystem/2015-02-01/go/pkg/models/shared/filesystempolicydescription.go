package shared

type FileSystemPolicyDescription struct {
	FileSystemID *string `json:"FileSystemId,omitempty"`
	Policy       *string `json:"Policy,omitempty"`
}
