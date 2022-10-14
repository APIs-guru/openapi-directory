package shared

type MeAccount struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type MeToken struct {
	Capabilities []string `json:"capabilities"`
	ID           int64    `json:"id"`
	Name         string   `json:"name"`
}

type MeUser struct {
	Email string `json:"email"`
	ID    int64  `json:"id"`
}

type Me struct {
	Account *MeAccount `json:"account,omitempty"`
	Token   *MeToken   `json:"token,omitempty"`
	User    *MeUser    `json:"user,omitempty"`
}
