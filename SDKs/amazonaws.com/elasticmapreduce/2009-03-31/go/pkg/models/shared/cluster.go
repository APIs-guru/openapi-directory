package shared



type Cluster struct {
    Applications []Application `json:"Applications,omitempty"`
    AutoScalingRole *string `json:"AutoScalingRole,omitempty"`
    AutoTerminate *bool `json:"AutoTerminate,omitempty"`
    ClusterArn *string `json:"ClusterArn,omitempty"`
    Configurations []Configuration `json:"Configurations,omitempty"`
    CustomAmiID *string `json:"CustomAmiId,omitempty"`
    EbsRootVolumeSize *int64 `json:"EbsRootVolumeSize,omitempty"`
    Ec2InstanceAttributes *Ec2InstanceAttributes `json:"Ec2InstanceAttributes,omitempty"`
    ID *string `json:"Id,omitempty"`
    InstanceCollectionType *InstanceCollectionTypeEnum `json:"InstanceCollectionType,omitempty"`
    KerberosAttributes *KerberosAttributes `json:"KerberosAttributes,omitempty"`
    LogEncryptionKmsKeyID *string `json:"LogEncryptionKmsKeyId,omitempty"`
    LogURI *string `json:"LogUri,omitempty"`
    MasterPublicDNSName *string `json:"MasterPublicDnsName,omitempty"`
    Name *string `json:"Name,omitempty"`
    NormalizedInstanceHours *int64 `json:"NormalizedInstanceHours,omitempty"`
    OutpostArn *string `json:"OutpostArn,omitempty"`
    PlacementGroups []PlacementGroupConfig `json:"PlacementGroups,omitempty"`
    ReleaseLabel *string `json:"ReleaseLabel,omitempty"`
    RepoUpgradeOnBoot *RepoUpgradeOnBootEnum `json:"RepoUpgradeOnBoot,omitempty"`
    RequestedAmiVersion *string `json:"RequestedAmiVersion,omitempty"`
    RunningAmiVersion *string `json:"RunningAmiVersion,omitempty"`
    ScaleDownBehavior *ScaleDownBehaviorEnum `json:"ScaleDownBehavior,omitempty"`
    SecurityConfiguration *string `json:"SecurityConfiguration,omitempty"`
    ServiceRole *string `json:"ServiceRole,omitempty"`
    Status *ClusterStatus `json:"Status,omitempty"`
    StepConcurrencyLevel *int64 `json:"StepConcurrencyLevel,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TerminationProtected *bool `json:"TerminationProtected,omitempty"`
    VisibleToAllUsers *bool `json:"VisibleToAllUsers,omitempty"`
    
}

