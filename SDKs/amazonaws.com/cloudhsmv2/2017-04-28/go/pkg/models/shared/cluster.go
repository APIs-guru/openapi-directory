package shared

import (
	"time"
)

type Cluster struct {
	BackupPolicy          *BackupPolicyEnum      `json:"BackupPolicy"`
	BackupRetentionPolicy *BackupRetentionPolicy `json:"BackupRetentionPolicy"`
	Certificates          *Certificates          `json:"Certificates"`
	ClusterID             *string                `json:"ClusterId"`
	CreateTimestamp       *time.Time             `json:"CreateTimestamp"`
	HsmType               *string                `json:"HsmType"`
	Hsms                  []Hsm                  `json:"Hsms"`
	PreCoPassword         *string                `json:"PreCoPassword"`
	SecurityGroup         *string                `json:"SecurityGroup"`
	SourceBackupID        *string                `json:"SourceBackupId"`
	State                 *ClusterStateEnum      `json:"State"`
	StateMessage          *string                `json:"StateMessage"`
	SubnetMapping         map[string]string      `json:"SubnetMapping"`
	TagList               []Tag                  `json:"TagList"`
	VpcID                 *string                `json:"VpcId"`
}
