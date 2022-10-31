package operations

type GetListPoliciesGrantingServiceAccessActionEnum string

const (
	GetListPoliciesGrantingServiceAccessActionEnumListPoliciesGrantingServiceAccess GetListPoliciesGrantingServiceAccessActionEnum = "ListPoliciesGrantingServiceAccess"
)

type GetListPoliciesGrantingServiceAccessVersionEnum string

const (
	GetListPoliciesGrantingServiceAccessVersionEnumTwoThousandAndTen0508 GetListPoliciesGrantingServiceAccessVersionEnum = "2010-05-08"
)

type GetListPoliciesGrantingServiceAccessQueryParams struct {
	Action            GetListPoliciesGrantingServiceAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Arn               string                                          `queryParam:"style=form,explode=true,name=Arn"`
	Marker            *string                                         `queryParam:"style=form,explode=true,name=Marker"`
	ServiceNamespaces []string                                        `queryParam:"style=form,explode=true,name=ServiceNamespaces"`
	Version           GetListPoliciesGrantingServiceAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListPoliciesGrantingServiceAccessHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListPoliciesGrantingServiceAccessRequest struct {
	QueryParams GetListPoliciesGrantingServiceAccessQueryParams
	Headers     GetListPoliciesGrantingServiceAccessHeaders
}

type GetListPoliciesGrantingServiceAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
