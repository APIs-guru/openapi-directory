package operations

type GetAuthorizableKeystorePathParams struct {
	AuthorizableID   string `pathParam:"style=simple,explode=false,name=authorizableId"`
	IntermediatePath string `pathParam:"style=simple,explode=false,name=intermediatePath"`
}

type GetAuthorizableKeystoreRequest struct {
	PathParams GetAuthorizableKeystorePathParams
}

type GetAuthorizableKeystoreResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	GetAuthorizableKeystoreDefaultTextPlainString *string
}
