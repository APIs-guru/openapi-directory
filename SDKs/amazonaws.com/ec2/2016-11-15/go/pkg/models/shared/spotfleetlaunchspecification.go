package shared

// SpotFleetLaunchSpecification
// Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.
type SpotFleetLaunchSpecification struct {
	AddressingType      *string
	BlockDeviceMappings []BlockDeviceMapping
	EbsOptimized        *bool
	IamInstanceProfile  *IamInstanceProfileSpecification
	ImageID             *string
	InstanceType        *InstanceTypeEnum
	KernelID            *string
	KeyName             *string
	Monitoring          *SpotFleetMonitoring
	NetworkInterfaces   []InstanceNetworkInterfaceSpecification
	Placement           *SpotPlacement
	RamdiskID           *string
	SecurityGroups      []GroupIdentifier
	SpotPrice           *string
	SubnetID            *string
	TagSpecifications   []SpotFleetTagSpecification
	UserData            *string
	WeightedCapacity    *float64
}
