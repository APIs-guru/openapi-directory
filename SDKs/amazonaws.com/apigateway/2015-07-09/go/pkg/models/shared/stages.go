package shared

// Stages
// <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
type Stages struct {
	Item []Stage `json:"item,omitempty"`
}
