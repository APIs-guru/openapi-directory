package operations

type GetDeleteLaunchTemplateVersionsActionEnum string

const (
	GetDeleteLaunchTemplateVersionsActionEnumDeleteLaunchTemplateVersions GetDeleteLaunchTemplateVersionsActionEnum = "DeleteLaunchTemplateVersions"
)

type GetDeleteLaunchTemplateVersionsVersionEnum string

const (
	GetDeleteLaunchTemplateVersionsVersionEnumTwoThousandAndSixteen1115 GetDeleteLaunchTemplateVersionsVersionEnum = "2016-11-15"
)

type GetDeleteLaunchTemplateVersionsQueryParams struct {
	Action                GetDeleteLaunchTemplateVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	LaunchTemplateID      *string                                    `queryParam:"style=form,explode=true,name=LaunchTemplateId"`
	LaunchTemplateName    *string                                    `queryParam:"style=form,explode=true,name=LaunchTemplateName"`
	LaunchTemplateVersion []string                                   `queryParam:"style=form,explode=true,name=LaunchTemplateVersion"`
	Version               GetDeleteLaunchTemplateVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLaunchTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteLaunchTemplateVersionsRequest struct {
	QueryParams GetDeleteLaunchTemplateVersionsQueryParams
	Headers     GetDeleteLaunchTemplateVersionsHeaders
}

type GetDeleteLaunchTemplateVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
