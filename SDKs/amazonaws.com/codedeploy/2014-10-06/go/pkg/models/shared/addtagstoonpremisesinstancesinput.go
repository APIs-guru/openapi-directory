package shared



type AddTagsToOnPremisesInstancesInput struct {
    InstanceNames []string `json:"instanceNames"`
    Tags []Tag `json:"tags"`
    
}

