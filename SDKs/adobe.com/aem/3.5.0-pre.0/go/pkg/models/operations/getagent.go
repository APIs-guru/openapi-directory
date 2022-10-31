package operations

type GetAgentPathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Runmode string `pathParam:"style=simple,explode=false,name=runmode"`
}

type GetAgentRequest struct {
	PathParams GetAgentPathParams
}

type GetAgentResponse struct {
	ContentType string
	StatusCode  int64
}
