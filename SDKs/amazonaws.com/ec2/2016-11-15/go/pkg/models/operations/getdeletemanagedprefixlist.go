package operations

type GetDeleteManagedPrefixListActionEnum string

const (
	GetDeleteManagedPrefixListActionEnumDeleteManagedPrefixList GetDeleteManagedPrefixListActionEnum = "DeleteManagedPrefixList"
)

type GetDeleteManagedPrefixListVersionEnum string

const (
	GetDeleteManagedPrefixListVersionEnumTwoThousandAndSixteen1115 GetDeleteManagedPrefixListVersionEnum = "2016-11-15"
)

type GetDeleteManagedPrefixListQueryParams struct {
	Action       GetDeleteManagedPrefixListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	PrefixListID string                                `queryParam:"style=form,explode=true,name=PrefixListId"`
	Version      GetDeleteManagedPrefixListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteManagedPrefixListHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteManagedPrefixListRequest struct {
	QueryParams GetDeleteManagedPrefixListQueryParams
	Headers     GetDeleteManagedPrefixListHeaders
}

type GetDeleteManagedPrefixListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
