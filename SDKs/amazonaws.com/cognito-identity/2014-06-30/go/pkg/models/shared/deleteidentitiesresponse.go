package shared

type DeleteIdentitiesResponse struct {
	UnprocessedIdentityIds []UnprocessedIdentityID `json:"UnprocessedIdentityIds"`
}
