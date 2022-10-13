package operations

type PostModifyManagedPrefixListActionEnum string

const (
	PostModifyManagedPrefixListActionEnumModifyManagedPrefixList PostModifyManagedPrefixListActionEnum = "ModifyManagedPrefixList"
)

type PostModifyManagedPrefixListVersionEnum string

const (
	PostModifyManagedPrefixListVersionEnumTwoThousandAndSixteen1115 PostModifyManagedPrefixListVersionEnum = "2016-11-15"
)

type PostModifyManagedPrefixListQueryParams struct {
	Action  PostModifyManagedPrefixListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyManagedPrefixListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyManagedPrefixListHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyManagedPrefixListRequest struct {
	QueryParams PostModifyManagedPrefixListQueryParams
	Headers     PostModifyManagedPrefixListHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyManagedPrefixListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
