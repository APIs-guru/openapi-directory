package shared

import (
	"time"
)

type Cluster struct {
	BackupPolicy          *BackupPolicyEnum      `json:"BackupPolicy,omitempty"`
	BackupRetentionPolicy *BackupRetentionPolicy `json:"BackupRetentionPolicy,omitempty"`
	Certificates          *Certificates          `json:"Certificates,omitempty"`
	ClusterID             *string                `json:"ClusterId,omitempty"`
	CreateTimestamp       *time.Time             `json:"CreateTimestamp,omitempty"`
	HsmType               *string                `json:"HsmType,omitempty"`
	Hsms                  []Hsm                  `json:"Hsms,omitempty"`
	PreCoPassword         *string                `json:"PreCoPassword,omitempty"`
	SecurityGroup         *string                `json:"SecurityGroup,omitempty"`
	SourceBackupID        *string                `json:"SourceBackupId,omitempty"`
	State                 *ClusterStateEnum      `json:"State,omitempty"`
	StateMessage          *string                `json:"StateMessage,omitempty"`
	SubnetMapping         map[string]string      `json:"SubnetMapping,omitempty"`
	TagList               []Tag                  `json:"TagList,omitempty"`
	VpcID                 *string                `json:"VpcId,omitempty"`
}
