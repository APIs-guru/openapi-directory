package shared

import (
	"time"
)

// Stage
// <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
type Stage struct {
	AccessLogSettings    *AccessLogSettings       `json:"accessLogSettings,omitempty"`
	CacheClusterEnabled  *bool                    `json:"cacheClusterEnabled,omitempty"`
	CacheClusterSize     *CacheClusterSizeEnum    `json:"cacheClusterSize,omitempty"`
	CacheClusterStatus   *CacheClusterStatusEnum  `json:"cacheClusterStatus,omitempty"`
	CanarySettings       *CanarySettings          `json:"canarySettings,omitempty"`
	ClientCertificateID  *string                  `json:"clientCertificateId,omitempty"`
	CreatedDate          *time.Time               `json:"createdDate,omitempty"`
	DeploymentID         *string                  `json:"deploymentId,omitempty"`
	Description          *string                  `json:"description,omitempty"`
	DocumentationVersion *string                  `json:"documentationVersion,omitempty"`
	LastUpdatedDate      *time.Time               `json:"lastUpdatedDate,omitempty"`
	MethodSettings       map[string]MethodSetting `json:"methodSettings,omitempty"`
	StageName            *string                  `json:"stageName,omitempty"`
	Tags                 map[string]string        `json:"tags,omitempty"`
	TracingEnabled       *bool                    `json:"tracingEnabled,omitempty"`
	Variables            map[string]string        `json:"variables,omitempty"`
	WebACLArn            *string                  `json:"webAclArn,omitempty"`
}
