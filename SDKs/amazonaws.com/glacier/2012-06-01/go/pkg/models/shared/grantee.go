package shared

type Grantee struct {
	DisplayName  *string  `json:"DisplayName"`
	EmailAddress *string  `json:"EmailAddress"`
	ID           *string  `json:"ID"`
	Type         TypeEnum `json:"Type"`
	URI          *string  `json:"URI"`
}
