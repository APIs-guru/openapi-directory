package operations

type GetDeleteTrafficMirrorFilterActionEnum string

const (
	GetDeleteTrafficMirrorFilterActionEnumDeleteTrafficMirrorFilter GetDeleteTrafficMirrorFilterActionEnum = "DeleteTrafficMirrorFilter"
)

type GetDeleteTrafficMirrorFilterVersionEnum string

const (
	GetDeleteTrafficMirrorFilterVersionEnumTwoThousandAndSixteen1115 GetDeleteTrafficMirrorFilterVersionEnum = "2016-11-15"
)

type GetDeleteTrafficMirrorFilterQueryParams struct {
	Action                GetDeleteTrafficMirrorFilterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	TrafficMirrorFilterID string                                  `queryParam:"style=form,explode=true,name=TrafficMirrorFilterId"`
	Version               GetDeleteTrafficMirrorFilterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTrafficMirrorFilterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTrafficMirrorFilterRequest struct {
	QueryParams GetDeleteTrafficMirrorFilterQueryParams
	Headers     GetDeleteTrafficMirrorFilterHeaders
}

type GetDeleteTrafficMirrorFilterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
