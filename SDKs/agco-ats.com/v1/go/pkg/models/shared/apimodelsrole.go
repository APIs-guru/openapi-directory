package shared



type APIModelsRole struct {
    Description string `json:"Description" form:"name=Description"`
    ID *int32 `json:"Id,omitempty" form:"name=Id"`
    Name string `json:"Name" form:"name=Name"`
    
}

