package operations

type GetDeleteNetworkACLActionEnum string

const (
	GetDeleteNetworkACLActionEnumDeleteNetworkACL GetDeleteNetworkACLActionEnum = "DeleteNetworkAcl"
)

type GetDeleteNetworkACLVersionEnum string

const (
	GetDeleteNetworkACLVersionEnumTwoThousandAndSixteen1115 GetDeleteNetworkACLVersionEnum = "2016-11-15"
)

type GetDeleteNetworkACLQueryParams struct {
	Action       GetDeleteNetworkACLActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkACLID string                         `queryParam:"style=form,explode=true,name=NetworkAclId"`
	Version      GetDeleteNetworkACLVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteNetworkACLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteNetworkACLRequest struct {
	QueryParams GetDeleteNetworkACLQueryParams
	Headers     GetDeleteNetworkACLHeaders
}

type GetDeleteNetworkACLResponse struct {
	ContentType string
	StatusCode  int64
}
