package shared

// ResponseLaunchTemplateData
// The information for a launch template.
type ResponseLaunchTemplateData struct {
	BlockDeviceMappings               []LaunchTemplateBlockDeviceMapping
	CapacityReservationSpecification  *LaunchTemplateCapacityReservationSpecificationResponse
	CPUOptions                        *LaunchTemplateCPUOptions
	CreditSpecification               *CreditSpecification
	DisableAPITermination             *bool
	EbsOptimized                      *bool
	ElasticGpuSpecifications          []ElasticGpuSpecificationResponse
	ElasticInferenceAccelerators      []LaunchTemplateElasticInferenceAcceleratorResponse
	EnclaveOptions                    *LaunchTemplateEnclaveOptions
	HibernationOptions                *LaunchTemplateHibernationOptions
	IamInstanceProfile                *LaunchTemplateIamInstanceProfileSpecification
	ImageID                           *string
	InstanceInitiatedShutdownBehavior *ShutdownBehaviorEnum
	InstanceMarketOptions             *LaunchTemplateInstanceMarketOptions
	InstanceType                      *InstanceTypeEnum
	KernelID                          *string
	KeyName                           *string
	LicenseSpecifications             []LaunchTemplateLicenseConfiguration
	MetadataOptions                   *LaunchTemplateInstanceMetadataOptions
	Monitoring                        *LaunchTemplatesMonitoring
	NetworkInterfaces                 []LaunchTemplateInstanceNetworkInterfaceSpecification
	Placement                         *LaunchTemplatePlacement
	RAMDiskID                         *string
	SecurityGroupIds                  []string
	SecurityGroups                    []string
	TagSpecifications                 []LaunchTemplateTagSpecification
	UserData                          *string
}
