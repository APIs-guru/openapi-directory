package operations

type GetRestoreManagedPrefixListVersionActionEnum string

const (
	GetRestoreManagedPrefixListVersionActionEnumRestoreManagedPrefixListVersion GetRestoreManagedPrefixListVersionActionEnum = "RestoreManagedPrefixListVersion"
)

type GetRestoreManagedPrefixListVersionVersionEnum string

const (
	GetRestoreManagedPrefixListVersionVersionEnumTwoThousandAndSixteen1115 GetRestoreManagedPrefixListVersionVersionEnum = "2016-11-15"
)

type GetRestoreManagedPrefixListVersionQueryParams struct {
	Action          GetRestoreManagedPrefixListVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CurrentVersion  int64                                         `queryParam:"style=form,explode=true,name=CurrentVersion"`
	DryRun          *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	PrefixListID    string                                        `queryParam:"style=form,explode=true,name=PrefixListId"`
	PreviousVersion int64                                         `queryParam:"style=form,explode=true,name=PreviousVersion"`
	Version         GetRestoreManagedPrefixListVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRestoreManagedPrefixListVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRestoreManagedPrefixListVersionRequest struct {
	QueryParams GetRestoreManagedPrefixListVersionQueryParams
	Headers     GetRestoreManagedPrefixListVersionHeaders
}

type GetRestoreManagedPrefixListVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
