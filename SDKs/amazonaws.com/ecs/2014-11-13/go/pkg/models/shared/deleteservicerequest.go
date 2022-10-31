package shared



type DeleteServiceRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    Force *bool `json:"force,omitempty"`
    Service string `json:"service"`
    
}

