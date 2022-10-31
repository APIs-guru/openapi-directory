package shared



type ThingAttribute struct {
    Attributes map[string]string `json:"attributes,omitempty"`
    ThingArn *string `json:"thingArn,omitempty"`
    ThingName *string `json:"thingName,omitempty"`
    ThingTypeName *string `json:"thingTypeName,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

