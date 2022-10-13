package operations

type GetDeleteSecurityGroupActionEnum string

const (
	GetDeleteSecurityGroupActionEnumDeleteSecurityGroup GetDeleteSecurityGroupActionEnum = "DeleteSecurityGroup"
)

type GetDeleteSecurityGroupVersionEnum string

const (
	GetDeleteSecurityGroupVersionEnumTwoThousandAndSixteen1115 GetDeleteSecurityGroupVersionEnum = "2016-11-15"
)

type GetDeleteSecurityGroupQueryParams struct {
	Action    GetDeleteSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun    *bool                             `queryParam:"style=form,explode=true,name=DryRun"`
	GroupID   *string                           `queryParam:"style=form,explode=true,name=GroupId"`
	GroupName *string                           `queryParam:"style=form,explode=true,name=GroupName"`
	Version   GetDeleteSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteSecurityGroupRequest struct {
	QueryParams GetDeleteSecurityGroupQueryParams
	Headers     GetDeleteSecurityGroupHeaders
}

type GetDeleteSecurityGroupResponse struct {
	ContentType string
	StatusCode  int64
}
