package shared

type Cluster struct {
	Applications            []Application               `json:"Applications"`
	AutoScalingRole         *string                     `json:"AutoScalingRole"`
	AutoTerminate           *bool                       `json:"AutoTerminate"`
	ClusterArn              *string                     `json:"ClusterArn"`
	Configurations          []Configuration             `json:"Configurations"`
	CustomAmiID             *string                     `json:"CustomAmiId"`
	EbsRootVolumeSize       *int64                      `json:"EbsRootVolumeSize"`
	Ec2InstanceAttributes   *Ec2InstanceAttributes      `json:"Ec2InstanceAttributes"`
	ID                      *string                     `json:"Id"`
	InstanceCollectionType  *InstanceCollectionTypeEnum `json:"InstanceCollectionType"`
	KerberosAttributes      *KerberosAttributes         `json:"KerberosAttributes"`
	LogEncryptionKmsKeyID   *string                     `json:"LogEncryptionKmsKeyId"`
	LogURI                  *string                     `json:"LogUri"`
	MasterPublicDNSName     *string                     `json:"MasterPublicDnsName"`
	Name                    *string                     `json:"Name"`
	NormalizedInstanceHours *int64                      `json:"NormalizedInstanceHours"`
	OutpostArn              *string                     `json:"OutpostArn"`
	PlacementGroups         []PlacementGroupConfig      `json:"PlacementGroups"`
	ReleaseLabel            *string                     `json:"ReleaseLabel"`
	RepoUpgradeOnBoot       *RepoUpgradeOnBootEnum      `json:"RepoUpgradeOnBoot"`
	RequestedAmiVersion     *string                     `json:"RequestedAmiVersion"`
	RunningAmiVersion       *string                     `json:"RunningAmiVersion"`
	ScaleDownBehavior       *ScaleDownBehaviorEnum      `json:"ScaleDownBehavior"`
	SecurityConfiguration   *string                     `json:"SecurityConfiguration"`
	ServiceRole             *string                     `json:"ServiceRole"`
	Status                  *ClusterStatus              `json:"Status"`
	StepConcurrencyLevel    *int64                      `json:"StepConcurrencyLevel"`
	Tags                    []Tag                       `json:"Tags"`
	TerminationProtected    *bool                       `json:"TerminationProtected"`
	VisibleToAllUsers       *bool                       `json:"VisibleToAllUsers"`
}
