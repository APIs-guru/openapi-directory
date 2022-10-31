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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
