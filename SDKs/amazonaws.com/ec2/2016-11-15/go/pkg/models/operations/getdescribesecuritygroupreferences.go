package operations

type GetDescribeSecurityGroupReferencesActionEnum string

const (
	GetDescribeSecurityGroupReferencesActionEnumDescribeSecurityGroupReferences GetDescribeSecurityGroupReferencesActionEnum = "DescribeSecurityGroupReferences"
)

type GetDescribeSecurityGroupReferencesVersionEnum string

const (
	GetDescribeSecurityGroupReferencesVersionEnumTwoThousandAndSixteen1115 GetDescribeSecurityGroupReferencesVersionEnum = "2016-11-15"
)

type GetDescribeSecurityGroupReferencesQueryParams struct {
	Action  GetDescribeSecurityGroupReferencesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	GroupID []string                                      `queryParam:"style=form,explode=true,name=GroupId"`
	Version GetDescribeSecurityGroupReferencesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSecurityGroupReferencesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeSecurityGroupReferencesRequest struct {
	QueryParams GetDescribeSecurityGroupReferencesQueryParams
	Headers     GetDescribeSecurityGroupReferencesHeaders
}

type GetDescribeSecurityGroupReferencesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
