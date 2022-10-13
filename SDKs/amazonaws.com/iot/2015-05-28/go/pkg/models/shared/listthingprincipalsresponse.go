package shared

type ListThingPrincipalsResponse struct {
	NextToken  *string  `json:"nextToken"`
	Principals []string `json:"principals"`
}
