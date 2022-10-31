package shared



type CreateCapacityProviderRequest struct {
    AutoScalingGroupProvider AutoScalingGroupProvider `json:"autoScalingGroupProvider"`
    Name string `json:"name"`
    Tags []Tag `json:"tags,omitempty"`
    
}

