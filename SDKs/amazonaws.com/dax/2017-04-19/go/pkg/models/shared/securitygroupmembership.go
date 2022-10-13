package shared

type SecurityGroupMembership struct {
	SecurityGroupIdentifier *string `json:"SecurityGroupIdentifier"`
	Status                  *string `json:"Status"`
}
