package operations

type GetListEntitiesForPolicyActionEnum string

const (
	GetListEntitiesForPolicyActionEnumListEntitiesForPolicy GetListEntitiesForPolicyActionEnum = "ListEntitiesForPolicy"
)

type GetListEntitiesForPolicyEntityFilterEnum string

const (
	GetListEntitiesForPolicyEntityFilterEnumUser               GetListEntitiesForPolicyEntityFilterEnum = "User"
	GetListEntitiesForPolicyEntityFilterEnumRole               GetListEntitiesForPolicyEntityFilterEnum = "Role"
	GetListEntitiesForPolicyEntityFilterEnumGroup              GetListEntitiesForPolicyEntityFilterEnum = "Group"
	GetListEntitiesForPolicyEntityFilterEnumLocalManagedPolicy GetListEntitiesForPolicyEntityFilterEnum = "LocalManagedPolicy"
	GetListEntitiesForPolicyEntityFilterEnumAwsManagedPolicy   GetListEntitiesForPolicyEntityFilterEnum = "AWSManagedPolicy"
)

type GetListEntitiesForPolicyPolicyUsageFilterEnum string

const (
	GetListEntitiesForPolicyPolicyUsageFilterEnumPermissionsPolicy   GetListEntitiesForPolicyPolicyUsageFilterEnum = "PermissionsPolicy"
	GetListEntitiesForPolicyPolicyUsageFilterEnumPermissionsBoundary GetListEntitiesForPolicyPolicyUsageFilterEnum = "PermissionsBoundary"
)

type GetListEntitiesForPolicyVersionEnum string

const (
	GetListEntitiesForPolicyVersionEnumTwoThousandAndTen0508 GetListEntitiesForPolicyVersionEnum = "2010-05-08"
)

type GetListEntitiesForPolicyQueryParams struct {
	Action            GetListEntitiesForPolicyActionEnum             `queryParam:"style=form,explode=true,name=Action"`
	EntityFilter      *GetListEntitiesForPolicyEntityFilterEnum      `queryParam:"style=form,explode=true,name=EntityFilter"`
	Marker            *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems          *int64                                         `queryParam:"style=form,explode=true,name=MaxItems"`
	PathPrefix        *string                                        `queryParam:"style=form,explode=true,name=PathPrefix"`
	PolicyArn         string                                         `queryParam:"style=form,explode=true,name=PolicyArn"`
	PolicyUsageFilter *GetListEntitiesForPolicyPolicyUsageFilterEnum `queryParam:"style=form,explode=true,name=PolicyUsageFilter"`
	Version           GetListEntitiesForPolicyVersionEnum            `queryParam:"style=form,explode=true,name=Version"`
}

type GetListEntitiesForPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListEntitiesForPolicyRequest struct {
	QueryParams GetListEntitiesForPolicyQueryParams
	Headers     GetListEntitiesForPolicyHeaders
}

type GetListEntitiesForPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
