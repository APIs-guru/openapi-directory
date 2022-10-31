package shared



type DeleteTaskSetRequest struct {
    Cluster string `json:"cluster"`
    Force *bool `json:"force,omitempty"`
    Service string `json:"service"`
    TaskSet string `json:"taskSet"`
    
}

