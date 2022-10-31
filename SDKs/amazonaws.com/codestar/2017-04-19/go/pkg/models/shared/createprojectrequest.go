package shared



type CreateProjectRequest struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    Name string `json:"name"`
    SourceCode []Code `json:"sourceCode,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Toolchain *Toolchain `json:"toolchain,omitempty"`
    
}

