package shared

import (
"time")

type UpdateUserProfileResult struct {
    CreatedTimestamp *time.Time `json:"createdTimestamp,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    LastModifiedTimestamp *time.Time `json:"lastModifiedTimestamp,omitempty"`
    SSHPublicKey *string `json:"sshPublicKey,omitempty"`
    UserArn string `json:"userArn"`
    
}

