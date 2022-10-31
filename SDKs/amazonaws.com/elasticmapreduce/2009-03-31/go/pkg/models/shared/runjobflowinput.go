package shared

type RunJobFlowInput struct {
	AdditionalInfo        *string                  `json:"AdditionalInfo,omitempty"`
	AmiVersion            *string                  `json:"AmiVersion,omitempty"`
	Applications          []Application            `json:"Applications,omitempty"`
	AutoScalingRole       *string                  `json:"AutoScalingRole,omitempty"`
	AutoTerminationPolicy *AutoTerminationPolicy   `json:"AutoTerminationPolicy,omitempty"`
	BootstrapActions      []BootstrapActionConfig  `json:"BootstrapActions,omitempty"`
	Configurations        []Configuration          `json:"Configurations,omitempty"`
	CustomAmiID           *string                  `json:"CustomAmiId,omitempty"`
	EbsRootVolumeSize     *int64                   `json:"EbsRootVolumeSize,omitempty"`
	Instances             JobFlowInstancesConfig   `json:"Instances"`
	JobFlowRole           *string                  `json:"JobFlowRole,omitempty"`
	KerberosAttributes    *KerberosAttributes      `json:"KerberosAttributes,omitempty"`
	LogEncryptionKmsKeyID *string                  `json:"LogEncryptionKmsKeyId,omitempty"`
	LogURI                *string                  `json:"LogUri,omitempty"`
	ManagedScalingPolicy  *ManagedScalingPolicy    `json:"ManagedScalingPolicy,omitempty"`
	Name                  string                   `json:"Name"`
	NewSupportedProducts  []SupportedProductConfig `json:"NewSupportedProducts,omitempty"`
	PlacementGroupConfigs []PlacementGroupConfig   `json:"PlacementGroupConfigs,omitempty"`
	ReleaseLabel          *string                  `json:"ReleaseLabel,omitempty"`
	RepoUpgradeOnBoot     *RepoUpgradeOnBootEnum   `json:"RepoUpgradeOnBoot,omitempty"`
	ScaleDownBehavior     *ScaleDownBehaviorEnum   `json:"ScaleDownBehavior,omitempty"`
	SecurityConfiguration *string                  `json:"SecurityConfiguration,omitempty"`
	ServiceRole           *string                  `json:"ServiceRole,omitempty"`
	StepConcurrencyLevel  *int64                   `json:"StepConcurrencyLevel,omitempty"`
	Steps                 []StepConfig             `json:"Steps,omitempty"`
	SupportedProducts     []string                 `json:"SupportedProducts,omitempty"`
	Tags                  []Tag                    `json:"Tags,omitempty"`
	VisibleToAllUsers     *bool                    `json:"VisibleToAllUsers,omitempty"`
}
