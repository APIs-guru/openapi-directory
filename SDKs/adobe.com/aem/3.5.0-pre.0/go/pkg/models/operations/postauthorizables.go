package operations

type PostAuthorizablesQueryParams struct {
	AuthorizableID   string  `queryParam:"style=form,explode=true,name=authorizableId"`
	CreateGroup      *string `queryParam:"style=form,explode=true,name=createGroup"`
	CreateUser       *string `queryParam:"style=form,explode=true,name=createUser"`
	IntermediatePath string  `queryParam:"style=form,explode=true,name=intermediatePath"`
	ProfileGivenName *string `queryParam:"style=form,explode=true,name=profile/givenName"`
	RepPassword      *string `queryParam:"style=form,explode=true,name=rep:password"`
}

type PostAuthorizablesRequest struct {
	QueryParams PostAuthorizablesQueryParams
}

type PostAuthorizablesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
