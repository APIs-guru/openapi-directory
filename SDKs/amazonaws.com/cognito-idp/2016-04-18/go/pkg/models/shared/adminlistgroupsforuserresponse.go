package shared



type AdminListGroupsForUserResponse struct {
    Groups []GroupType `json:"Groups,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

