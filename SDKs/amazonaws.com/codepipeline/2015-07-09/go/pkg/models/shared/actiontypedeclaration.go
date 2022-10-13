package shared

type ActionTypeDeclaration struct {
	Description           *string                   `json:"description"`
	Executor              ActionTypeExecutor        `json:"executor"`
	ID                    ActionTypeIdentifier      `json:"id"`
	InputArtifactDetails  ActionTypeArtifactDetails `json:"inputArtifactDetails"`
	OutputArtifactDetails ActionTypeArtifactDetails `json:"outputArtifactDetails"`
	Permissions           *ActionTypePermissions    `json:"permissions"`
	Properties            *interface{}              `json:"properties"`
	Urls                  *ActionTypeUrls           `json:"urls"`
}
