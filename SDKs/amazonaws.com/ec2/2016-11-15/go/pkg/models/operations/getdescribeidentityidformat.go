package operations

type GetDescribeIdentityIDFormatActionEnum string

const (
	GetDescribeIdentityIDFormatActionEnumDescribeIdentityIDFormat GetDescribeIdentityIDFormatActionEnum = "DescribeIdentityIdFormat"
)

type GetDescribeIdentityIDFormatVersionEnum string

const (
	GetDescribeIdentityIDFormatVersionEnumTwoThousandAndSixteen1115 GetDescribeIdentityIDFormatVersionEnum = "2016-11-15"
)

type GetDescribeIdentityIDFormatQueryParams struct {
	Action       GetDescribeIdentityIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PrincipalArn string                                 `queryParam:"style=form,explode=true,name=PrincipalArn"`
	Resource     *string                                `queryParam:"style=form,explode=true,name=Resource"`
	Version      GetDescribeIdentityIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeIdentityIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeIdentityIDFormatRequest struct {
	QueryParams GetDescribeIdentityIDFormatQueryParams
	Headers     GetDescribeIdentityIDFormatHeaders
}

type GetDescribeIdentityIDFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
