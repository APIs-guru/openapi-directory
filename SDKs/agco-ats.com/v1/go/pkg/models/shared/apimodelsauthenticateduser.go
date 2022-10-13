package shared

type APIModelsAuthenticatedUser struct {
	Email    *string `json:"Email"`
	MacID    *string `json:"MACId"`
	MacToken *string `json:"MACToken"`
	Name     *string `json:"Name"`
	Token    *string `json:"Token"`
	UserID   *int32  `json:"UserID"`
	Username *string `json:"Username"`
}
