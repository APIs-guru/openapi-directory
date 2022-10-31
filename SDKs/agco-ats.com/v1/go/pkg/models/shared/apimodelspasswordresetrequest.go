package shared



type APIModelsPasswordResetRequest struct {
    ParameterName string `json:"ParameterName" form:"name=ParameterName"`
    URL string `json:"Url" form:"name=Url"`
    Username string `json:"Username" form:"name=Username"`
    
}

