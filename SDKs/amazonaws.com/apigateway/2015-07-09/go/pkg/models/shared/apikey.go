package shared

import (
	"time"
)

// APIKey
// <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
type APIKey struct {
	CreatedDate     *time.Time        `json:"createdDate,omitempty"`
	CustomerID      *string           `json:"customerId,omitempty"`
	Description     *string           `json:"description,omitempty"`
	Enabled         *bool             `json:"enabled,omitempty"`
	ID              *string           `json:"id,omitempty"`
	LastUpdatedDate *time.Time        `json:"lastUpdatedDate,omitempty"`
	Name            *string           `json:"name,omitempty"`
	StageKeys       []string          `json:"stageKeys,omitempty"`
	Tags            map[string]string `json:"tags,omitempty"`
	Value           *string           `json:"value,omitempty"`
}
