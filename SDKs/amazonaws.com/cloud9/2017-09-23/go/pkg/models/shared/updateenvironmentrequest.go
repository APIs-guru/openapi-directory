package shared

type UpdateEnvironmentRequest struct {
	Description              *string                       `json:"description"`
	EnvironmentID            string                        `json:"environmentId"`
	ManagedCredentialsAction *ManagedCredentialsActionEnum `json:"managedCredentialsAction"`
	Name                     *string                       `json:"name"`
}
