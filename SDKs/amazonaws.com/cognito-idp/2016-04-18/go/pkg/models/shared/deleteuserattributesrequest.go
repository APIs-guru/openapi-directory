package shared



type DeleteUserAttributesRequest struct {
    AccessToken string `json:"AccessToken"`
    UserAttributeNames []string `json:"UserAttributeNames"`
    
}

