package shared



type ActionTypeDeclaration struct {
    Description *string `json:"description,omitempty"`
    Executor ActionTypeExecutor `json:"executor"`
    ID ActionTypeIdentifier `json:"id"`
    InputArtifactDetails ActionTypeArtifactDetails `json:"inputArtifactDetails"`
    OutputArtifactDetails ActionTypeArtifactDetails `json:"outputArtifactDetails"`
    Permissions *ActionTypePermissions `json:"permissions,omitempty"`
    Properties *interface{} `json:"properties,omitempty"`
    Urls *ActionTypeUrls `json:"urls,omitempty"`
    
}

