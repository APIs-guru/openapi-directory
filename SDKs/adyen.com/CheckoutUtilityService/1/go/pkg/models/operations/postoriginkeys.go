package operations

type PostOriginKeysRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostOriginKeysResponse struct {
	CheckoutUtilityResponse *interface{}
	ContentType             string
	StatusCode              int64
}
