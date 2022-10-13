package shared

type AdminListDevicesRequest struct {
	Limit           *int64  `json:"Limit"`
	PaginationToken *string `json:"PaginationToken"`
	UserPoolID      string  `json:"UserPoolId"`
	Username        string  `json:"Username"`
}
