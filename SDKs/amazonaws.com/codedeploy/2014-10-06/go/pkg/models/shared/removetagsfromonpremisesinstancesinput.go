package shared



type RemoveTagsFromOnPremisesInstancesInput struct {
    InstanceNames []string `json:"instanceNames"`
    Tags []Tag `json:"tags"`
    
}

