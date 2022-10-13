package shared

type Permission struct {
	Access      []string `json:"Access"`
	Grantee     *string  `json:"Grantee"`
	GranteeType *string  `json:"GranteeType"`
}
