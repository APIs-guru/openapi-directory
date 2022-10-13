package operations

type GetDeleteTrafficMirrorSessionActionEnum string

const (
	GetDeleteTrafficMirrorSessionActionEnumDeleteTrafficMirrorSession GetDeleteTrafficMirrorSessionActionEnum = "DeleteTrafficMirrorSession"
)

type GetDeleteTrafficMirrorSessionVersionEnum string

const (
	GetDeleteTrafficMirrorSessionVersionEnumTwoThousandAndSixteen1115 GetDeleteTrafficMirrorSessionVersionEnum = "2016-11-15"
)

type GetDeleteTrafficMirrorSessionQueryParams struct {
	Action                 GetDeleteTrafficMirrorSessionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                 *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	TrafficMirrorSessionID string                                   `queryParam:"style=form,explode=true,name=TrafficMirrorSessionId"`
	Version                GetDeleteTrafficMirrorSessionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTrafficMirrorSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTrafficMirrorSessionRequest struct {
	QueryParams GetDeleteTrafficMirrorSessionQueryParams
	Headers     GetDeleteTrafficMirrorSessionHeaders
}

type GetDeleteTrafficMirrorSessionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
