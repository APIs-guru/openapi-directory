package shared

import (
	"time"
)

type Cluster struct {
	Arn                     *string                          `json:"arn"`
	CertificateAuthority    *Certificate                     `json:"certificateAuthority"`
	ClientRequestToken      *string                          `json:"clientRequestToken"`
	ConnectorConfig         *ConnectorConfigResponse         `json:"connectorConfig"`
	CreatedAt               *time.Time                       `json:"createdAt"`
	EncryptionConfig        []EncryptionConfig               `json:"encryptionConfig"`
	Endpoint                *string                          `json:"endpoint"`
	Identity                *Identity                        `json:"identity"`
	KubernetesNetworkConfig *KubernetesNetworkConfigResponse `json:"kubernetesNetworkConfig"`
	Logging                 *Logging                         `json:"logging"`
	Name                    *string                          `json:"name"`
	PlatformVersion         *string                          `json:"platformVersion"`
	ResourcesVpcConfig      *VpcConfigResponse               `json:"resourcesVpcConfig"`
	RoleArn                 *string                          `json:"roleArn"`
	Status                  *ClusterStatusEnum               `json:"status"`
	Tags                    map[string]string                `json:"tags"`
	Version                 *string                          `json:"version"`
}
