package operations

type GetListAllowedNodeTypeModificationsActionEnum string

const (
	GetListAllowedNodeTypeModificationsActionEnumListAllowedNodeTypeModifications GetListAllowedNodeTypeModificationsActionEnum = "ListAllowedNodeTypeModifications"
)

type GetListAllowedNodeTypeModificationsVersionEnum string

const (
	GetListAllowedNodeTypeModificationsVersionEnumTwoThousandAndFifteen0202 GetListAllowedNodeTypeModificationsVersionEnum = "2015-02-02"
)

type GetListAllowedNodeTypeModificationsQueryParams struct {
	Action             GetListAllowedNodeTypeModificationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterID     *string                                        `queryParam:"style=form,explode=true,name=CacheClusterId"`
	ReplicationGroupID *string                                        `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	Version            GetListAllowedNodeTypeModificationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListAllowedNodeTypeModificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListAllowedNodeTypeModificationsRequest struct {
	QueryParams GetListAllowedNodeTypeModificationsQueryParams
	Headers     GetListAllowedNodeTypeModificationsHeaders
}

type GetListAllowedNodeTypeModificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
