package operations

type GetDescribeImageAttributeActionEnum string

const (
	GetDescribeImageAttributeActionEnumDescribeImageAttribute GetDescribeImageAttributeActionEnum = "DescribeImageAttribute"
)

type GetDescribeImageAttributeAttributeEnum string

const (
	GetDescribeImageAttributeAttributeEnumDescription        GetDescribeImageAttributeAttributeEnum = "description"
	GetDescribeImageAttributeAttributeEnumKernel             GetDescribeImageAttributeAttributeEnum = "kernel"
	GetDescribeImageAttributeAttributeEnumRamdisk            GetDescribeImageAttributeAttributeEnum = "ramdisk"
	GetDescribeImageAttributeAttributeEnumLaunchPermission   GetDescribeImageAttributeAttributeEnum = "launchPermission"
	GetDescribeImageAttributeAttributeEnumProductCodes       GetDescribeImageAttributeAttributeEnum = "productCodes"
	GetDescribeImageAttributeAttributeEnumBlockDeviceMapping GetDescribeImageAttributeAttributeEnum = "blockDeviceMapping"
	GetDescribeImageAttributeAttributeEnumSriovNetSupport    GetDescribeImageAttributeAttributeEnum = "sriovNetSupport"
	GetDescribeImageAttributeAttributeEnumBootMode           GetDescribeImageAttributeAttributeEnum = "bootMode"
)

type GetDescribeImageAttributeVersionEnum string

const (
	GetDescribeImageAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeImageAttributeVersionEnum = "2016-11-15"
)

type GetDescribeImageAttributeQueryParams struct {
	Action    GetDescribeImageAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute GetDescribeImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun    *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	ImageID   string                                 `queryParam:"style=form,explode=true,name=ImageId"`
	Version   GetDescribeImageAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeImageAttributeRequest struct {
	QueryParams GetDescribeImageAttributeQueryParams
	Headers     GetDescribeImageAttributeHeaders
}

type GetDescribeImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
