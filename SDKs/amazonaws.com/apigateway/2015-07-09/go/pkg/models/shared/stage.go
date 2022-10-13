package shared

import (
	"time"
)

type Stage struct {
	AccessLogSettings    *AccessLogSettings       `json:"accessLogSettings"`
	CacheClusterEnabled  *bool                    `json:"cacheClusterEnabled"`
	CacheClusterSize     *CacheClusterSizeEnum    `json:"cacheClusterSize"`
	CacheClusterStatus   *CacheClusterStatusEnum  `json:"cacheClusterStatus"`
	CanarySettings       *CanarySettings          `json:"canarySettings"`
	ClientCertificateID  *string                  `json:"clientCertificateId"`
	CreatedDate          *time.Time               `json:"createdDate"`
	DeploymentID         *string                  `json:"deploymentId"`
	Description          *string                  `json:"description"`
	DocumentationVersion *string                  `json:"documentationVersion"`
	LastUpdatedDate      *time.Time               `json:"lastUpdatedDate"`
	MethodSettings       map[string]MethodSetting `json:"methodSettings"`
	StageName            *string                  `json:"stageName"`
	Tags                 map[string]string        `json:"tags"`
	TracingEnabled       *bool                    `json:"tracingEnabled"`
	Variables            map[string]string        `json:"variables"`
	WebACLArn            *string                  `json:"webAclArn"`
}
