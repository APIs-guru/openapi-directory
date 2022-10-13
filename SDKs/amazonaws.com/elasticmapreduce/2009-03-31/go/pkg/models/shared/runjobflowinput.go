package shared

type RunJobFlowInput struct {
	AdditionalInfo        *string                  `json:"AdditionalInfo"`
	AmiVersion            *string                  `json:"AmiVersion"`
	Applications          []Application            `json:"Applications"`
	AutoScalingRole       *string                  `json:"AutoScalingRole"`
	AutoTerminationPolicy *AutoTerminationPolicy   `json:"AutoTerminationPolicy"`
	BootstrapActions      []BootstrapActionConfig  `json:"BootstrapActions"`
	Configurations        []Configuration          `json:"Configurations"`
	CustomAmiID           *string                  `json:"CustomAmiId"`
	EbsRootVolumeSize     *int64                   `json:"EbsRootVolumeSize"`
	Instances             JobFlowInstancesConfig   `json:"Instances"`
	JobFlowRole           *string                  `json:"JobFlowRole"`
	KerberosAttributes    *KerberosAttributes      `json:"KerberosAttributes"`
	LogEncryptionKmsKeyID *string                  `json:"LogEncryptionKmsKeyId"`
	LogURI                *string                  `json:"LogUri"`
	ManagedScalingPolicy  *ManagedScalingPolicy    `json:"ManagedScalingPolicy"`
	Name                  string                   `json:"Name"`
	NewSupportedProducts  []SupportedProductConfig `json:"NewSupportedProducts"`
	PlacementGroupConfigs []PlacementGroupConfig   `json:"PlacementGroupConfigs"`
	ReleaseLabel          *string                  `json:"ReleaseLabel"`
	RepoUpgradeOnBoot     *RepoUpgradeOnBootEnum   `json:"RepoUpgradeOnBoot"`
	ScaleDownBehavior     *ScaleDownBehaviorEnum   `json:"ScaleDownBehavior"`
	SecurityConfiguration *string                  `json:"SecurityConfiguration"`
	ServiceRole           *string                  `json:"ServiceRole"`
	StepConcurrencyLevel  *int64                   `json:"StepConcurrencyLevel"`
	Steps                 []StepConfig             `json:"Steps"`
	SupportedProducts     []string                 `json:"SupportedProducts"`
	Tags                  []Tag                    `json:"Tags"`
	VisibleToAllUsers     *bool                    `json:"VisibleToAllUsers"`
}
