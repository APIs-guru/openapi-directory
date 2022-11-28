package shared

// BasePathMapping
// <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
type BasePathMapping struct {
	BasePath  *string `json:"basePath,omitempty"`
	RestAPIID *string `json:"restApiId,omitempty"`
	Stage     *string `json:"stage,omitempty"`
}
