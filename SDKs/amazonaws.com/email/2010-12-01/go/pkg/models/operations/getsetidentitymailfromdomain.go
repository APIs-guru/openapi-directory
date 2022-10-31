package operations

type GetSetIdentityMailFromDomainActionEnum string

const (
	GetSetIdentityMailFromDomainActionEnumSetIdentityMailFromDomain GetSetIdentityMailFromDomainActionEnum = "SetIdentityMailFromDomain"
)

type GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum string

const (
	GetSetIdentityMailFromDomainBehaviorOnMxFailureEnumUseDefaultValue GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum = "UseDefaultValue"
	GetSetIdentityMailFromDomainBehaviorOnMxFailureEnumRejectMessage   GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum = "RejectMessage"
)

type GetSetIdentityMailFromDomainVersionEnum string

const (
	GetSetIdentityMailFromDomainVersionEnumTwoThousandAndTen1201 GetSetIdentityMailFromDomainVersionEnum = "2010-12-01"
)

type GetSetIdentityMailFromDomainQueryParams struct {
	Action              GetSetIdentityMailFromDomainActionEnum               `queryParam:"style=form,explode=true,name=Action"`
	BehaviorOnMxFailure *GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum `queryParam:"style=form,explode=true,name=BehaviorOnMXFailure"`
	Identity            string                                               `queryParam:"style=form,explode=true,name=Identity"`
	MailFromDomain      *string                                              `queryParam:"style=form,explode=true,name=MailFromDomain"`
	Version             GetSetIdentityMailFromDomainVersionEnum              `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetIdentityMailFromDomainHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSetIdentityMailFromDomainRequest struct {
	QueryParams GetSetIdentityMailFromDomainQueryParams
	Headers     GetSetIdentityMailFromDomainHeaders
}

type GetSetIdentityMailFromDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
