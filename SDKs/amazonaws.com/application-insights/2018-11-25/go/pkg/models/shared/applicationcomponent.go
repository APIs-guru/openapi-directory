package shared

type ApplicationComponent struct {
	ComponentName    *string                      `json:"ComponentName"`
	ComponentRemarks *string                      `json:"ComponentRemarks"`
	DetectedWorkload map[string]map[string]string `json:"DetectedWorkload"`
	Monitor          *bool                        `json:"Monitor"`
	OsType           *OsTypeEnum                  `json:"OsType"`
	ResourceType     *string                      `json:"ResourceType"`
	Tier             *TierEnum                    `json:"Tier"`
}
