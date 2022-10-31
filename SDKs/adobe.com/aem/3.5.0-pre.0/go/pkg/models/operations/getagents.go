package operations

type GetAgentsPathParams struct {
	Runmode string `pathParam:"style=simple,explode=false,name=runmode"`
}

type GetAgentsRequest struct {
	PathParams GetAgentsPathParams
}

type GetAgentsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetAgentsDefaultApplicationJSONString *string
}
