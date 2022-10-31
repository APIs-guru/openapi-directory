package shared

import (
"time")

type Stage struct {
    AccessLogSettings *AccessLogSettings `json:"accessLogSettings,omitempty"`
    CacheClusterEnabled *bool `json:"cacheClusterEnabled,omitempty"`
    CacheClusterSize *CacheClusterSizeEnum `json:"cacheClusterSize,omitempty"`
    CacheClusterStatus *CacheClusterStatusEnum `json:"cacheClusterStatus,omitempty"`
    CanarySettings *CanarySettings `json:"canarySettings,omitempty"`
    ClientCertificateID *string `json:"clientCertificateId,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    DeploymentID *string `json:"deploymentId,omitempty"`
    Description *string `json:"description,omitempty"`
    DocumentationVersion *string `json:"documentationVersion,omitempty"`
    LastUpdatedDate *time.Time `json:"lastUpdatedDate,omitempty"`
    MethodSettings map[string]MethodSetting `json:"methodSettings,omitempty"`
    StageName *string `json:"stageName,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TracingEnabled *bool `json:"tracingEnabled,omitempty"`
    Variables map[string]string `json:"variables,omitempty"`
    WebACLArn *string `json:"webAclArn,omitempty"`
    
}

