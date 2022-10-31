package operations

type PostModifyReservedInstancesActionEnum string

const (
	PostModifyReservedInstancesActionEnumModifyReservedInstances PostModifyReservedInstancesActionEnum = "ModifyReservedInstances"
)

type PostModifyReservedInstancesVersionEnum string

const (
	PostModifyReservedInstancesVersionEnumTwoThousandAndSixteen1115 PostModifyReservedInstancesVersionEnum = "2016-11-15"
)

type PostModifyReservedInstancesQueryParams struct {
	Action  PostModifyReservedInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyReservedInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyReservedInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyReservedInstancesRequest struct {
	QueryParams PostModifyReservedInstancesQueryParams
	Headers     PostModifyReservedInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyReservedInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
