package shared

// Resource
// <p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
type Resource struct {
	ID              *string           `json:"id,omitempty"`
	ParentID        *string           `json:"parentId,omitempty"`
	Path            *string           `json:"path,omitempty"`
	PathPart        *string           `json:"pathPart,omitempty"`
	ResourceMethods map[string]Method `json:"resourceMethods,omitempty"`
}
