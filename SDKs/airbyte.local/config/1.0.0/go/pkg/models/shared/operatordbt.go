package shared

type OperatorDbt struct {
	DbtArguments  *string `json:"dbtArguments"`
	DockerImage   *string `json:"dockerImage"`
	GitRepoBranch *string `json:"gitRepoBranch"`
	GitRepoURL    string  `json:"gitRepoUrl"`
}
