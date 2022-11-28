package operations

import (
	"openapi/pkg/models/shared"
)

var GetServerHealthServerList = []string{
	"http://localhost:8080",
}

type GetServerHealth200ApplicationJSON struct {
	Dependencies []shared.ServiceDependency `json:"dependencies,omitempty"`
	Name         string                     `json:"name"`
	Version      string                     `json:"version"`
}

type GetServerHealthRequest struct {
	ServerURL *string
}

type GetServerHealthResponse struct {
	ContentType                             string
	GetServerHealth200ApplicationJSONObject *GetServerHealth200ApplicationJSON
	StatusCode                              int64
}
