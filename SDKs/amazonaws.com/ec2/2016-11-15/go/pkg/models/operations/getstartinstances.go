package operations

type GetStartInstancesActionEnum string

const (
	GetStartInstancesActionEnumStartInstances GetStartInstancesActionEnum = "StartInstances"
)

type GetStartInstancesVersionEnum string

const (
	GetStartInstancesVersionEnumTwoThousandAndSixteen1115 GetStartInstancesVersionEnum = "2016-11-15"
)

type GetStartInstancesQueryParams struct {
	Action         GetStartInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AdditionalInfo *string                      `queryParam:"style=form,explode=true,name=AdditionalInfo"`
	DryRun         *bool                        `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID     []string                     `queryParam:"style=form,explode=true,name=InstanceId"`
	Version        GetStartInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartInstancesRequest struct {
	QueryParams GetStartInstancesQueryParams
	Headers     GetStartInstancesHeaders
}

type GetStartInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
