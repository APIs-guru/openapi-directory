package shared



type UpdateEnvironmentMembershipRequest struct {
    EnvironmentID string `json:"environmentId"`
    Permissions MemberPermissionsEnum `json:"permissions"`
    UserArn string `json:"userArn"`
    
}

