package operations

type GetSetInstanceProtectionActionEnum string

const (
	GetSetInstanceProtectionActionEnumSetInstanceProtection GetSetInstanceProtectionActionEnum = "SetInstanceProtection"
)

type GetSetInstanceProtectionVersionEnum string

const (
	GetSetInstanceProtectionVersionEnumTwoThousandAndEleven0101 GetSetInstanceProtectionVersionEnum = "2011-01-01"
)

type GetSetInstanceProtectionQueryParams struct {
	Action               GetSetInstanceProtectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                              `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceIds          []string                            `queryParam:"style=form,explode=true,name=InstanceIds"`
	ProtectedFromScaleIn bool                                `queryParam:"style=form,explode=true,name=ProtectedFromScaleIn"`
	Version              GetSetInstanceProtectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetInstanceProtectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetInstanceProtectionRequest struct {
	QueryParams GetSetInstanceProtectionQueryParams
	Headers     GetSetInstanceProtectionHeaders
}

type GetSetInstanceProtectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
