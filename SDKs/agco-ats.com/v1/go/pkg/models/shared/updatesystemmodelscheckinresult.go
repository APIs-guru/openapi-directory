package shared



type UpdateSystemModelsCheckinResult struct {
    Packages []UpdateSystemModelsPackage `json:"Packages,omitempty"`
    RemovePackages []string `json:"RemovePackages,omitempty"`
    
}

