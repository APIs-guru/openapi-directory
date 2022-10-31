package shared



type APIModelsPasswordReset struct {
    NewPassword string `json:"NewPassword" form:"name=NewPassword"`
    Token string `json:"Token" form:"name=Token"`
    
}

