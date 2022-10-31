package shared

type EnvironmentFile struct {
	Type  EnvironmentFileTypeEnum `json:"type"`
	Value string                  `json:"value"`
}
