package operations

type GetDescribeInstanceAttributeActionEnum string

const (
	GetDescribeInstanceAttributeActionEnumDescribeInstanceAttribute GetDescribeInstanceAttributeActionEnum = "DescribeInstanceAttribute"
)

type GetDescribeInstanceAttributeAttributeEnum string

const (
	GetDescribeInstanceAttributeAttributeEnumInstanceType                      GetDescribeInstanceAttributeAttributeEnum = "instanceType"
	GetDescribeInstanceAttributeAttributeEnumKernel                            GetDescribeInstanceAttributeAttributeEnum = "kernel"
	GetDescribeInstanceAttributeAttributeEnumRamdisk                           GetDescribeInstanceAttributeAttributeEnum = "ramdisk"
	GetDescribeInstanceAttributeAttributeEnumUserData                          GetDescribeInstanceAttributeAttributeEnum = "userData"
	GetDescribeInstanceAttributeAttributeEnumDisableAPITermination             GetDescribeInstanceAttributeAttributeEnum = "disableApiTermination"
	GetDescribeInstanceAttributeAttributeEnumInstanceInitiatedShutdownBehavior GetDescribeInstanceAttributeAttributeEnum = "instanceInitiatedShutdownBehavior"
	GetDescribeInstanceAttributeAttributeEnumRootDeviceName                    GetDescribeInstanceAttributeAttributeEnum = "rootDeviceName"
	GetDescribeInstanceAttributeAttributeEnumBlockDeviceMapping                GetDescribeInstanceAttributeAttributeEnum = "blockDeviceMapping"
	GetDescribeInstanceAttributeAttributeEnumProductCodes                      GetDescribeInstanceAttributeAttributeEnum = "productCodes"
	GetDescribeInstanceAttributeAttributeEnumSourceDestCheck                   GetDescribeInstanceAttributeAttributeEnum = "sourceDestCheck"
	GetDescribeInstanceAttributeAttributeEnumGroupSet                          GetDescribeInstanceAttributeAttributeEnum = "groupSet"
	GetDescribeInstanceAttributeAttributeEnumEbsOptimized                      GetDescribeInstanceAttributeAttributeEnum = "ebsOptimized"
	GetDescribeInstanceAttributeAttributeEnumSriovNetSupport                   GetDescribeInstanceAttributeAttributeEnum = "sriovNetSupport"
	GetDescribeInstanceAttributeAttributeEnumEnaSupport                        GetDescribeInstanceAttributeAttributeEnum = "enaSupport"
	GetDescribeInstanceAttributeAttributeEnumEnclaveOptions                    GetDescribeInstanceAttributeAttributeEnum = "enclaveOptions"
)

type GetDescribeInstanceAttributeVersionEnum string

const (
	GetDescribeInstanceAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeInstanceAttributeVersionEnum = "2016-11-15"
)

type GetDescribeInstanceAttributeQueryParams struct {
	Action     GetDescribeInstanceAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute  GetDescribeInstanceAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun     *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                                    `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetDescribeInstanceAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeInstanceAttributeRequest struct {
	QueryParams GetDescribeInstanceAttributeQueryParams
	Headers     GetDescribeInstanceAttributeHeaders
}

type GetDescribeInstanceAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
