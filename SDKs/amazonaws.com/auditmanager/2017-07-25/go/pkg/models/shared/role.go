package shared

type Role struct {
	RoleArn  *string       `json:"roleArn"`
	RoleType *RoleTypeEnum `json:"roleType"`
}
