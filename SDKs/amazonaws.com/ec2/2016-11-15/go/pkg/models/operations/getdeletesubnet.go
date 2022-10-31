package operations

type GetDeleteSubnetActionEnum string

const (
	GetDeleteSubnetActionEnumDeleteSubnet GetDeleteSubnetActionEnum = "DeleteSubnet"
)

type GetDeleteSubnetVersionEnum string

const (
	GetDeleteSubnetVersionEnumTwoThousandAndSixteen1115 GetDeleteSubnetVersionEnum = "2016-11-15"
)

type GetDeleteSubnetQueryParams struct {
	Action   GetDeleteSubnetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun   *bool                      `queryParam:"style=form,explode=true,name=DryRun"`
	SubnetID string                     `queryParam:"style=form,explode=true,name=SubnetId"`
	Version  GetDeleteSubnetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSubnetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteSubnetRequest struct {
	QueryParams GetDeleteSubnetQueryParams
	Headers     GetDeleteSubnetHeaders
}

type GetDeleteSubnetResponse struct {
	ContentType string
	StatusCode  int64
}
