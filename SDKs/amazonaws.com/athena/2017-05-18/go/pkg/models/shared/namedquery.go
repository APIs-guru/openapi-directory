package shared

type NamedQuery struct {
	Database     string  `json:"Database"`
	Description  *string `json:"Description"`
	Name         string  `json:"Name"`
	NamedQueryID *string `json:"NamedQueryId"`
	QueryString  string  `json:"QueryString"`
	WorkGroup    *string `json:"WorkGroup"`
}
