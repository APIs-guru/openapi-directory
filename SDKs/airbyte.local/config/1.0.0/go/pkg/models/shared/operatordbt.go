package shared



type OperatorDbt struct {
    DbtArguments *string `json:"dbtArguments,omitempty"`
    DockerImage *string `json:"dockerImage,omitempty"`
    GitRepoBranch *string `json:"gitRepoBranch,omitempty"`
    GitRepoURL string `json:"gitRepoUrl"`
    
}

