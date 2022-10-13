package shared

type UpdateSystemModelsCheckinResult struct {
	Packages       []UpdateSystemModelsPackage `json:"Packages"`
	RemovePackages []string                    `json:"RemovePackages"`
}
