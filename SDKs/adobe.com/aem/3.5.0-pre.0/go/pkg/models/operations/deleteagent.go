package operations

type DeleteAgentPathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Runmode string `pathParam:"style=simple,explode=false,name=runmode"`
}

type DeleteAgentRequest struct {
	PathParams DeleteAgentPathParams
}

type DeleteAgentResponse struct {
	ContentType string
	StatusCode  int64
}
