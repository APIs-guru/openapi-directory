package operations

type GetDeleteFleetsActionEnum string

const (
	GetDeleteFleetsActionEnumDeleteFleets GetDeleteFleetsActionEnum = "DeleteFleets"
)

type GetDeleteFleetsVersionEnum string

const (
	GetDeleteFleetsVersionEnumTwoThousandAndSixteen1115 GetDeleteFleetsVersionEnum = "2016-11-15"
)

type GetDeleteFleetsQueryParams struct {
	Action             GetDeleteFleetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                      `queryParam:"style=form,explode=true,name=DryRun"`
	FleetID            []string                   `queryParam:"style=form,explode=true,name=FleetId"`
	TerminateInstances bool                       `queryParam:"style=form,explode=true,name=TerminateInstances"`
	Version            GetDeleteFleetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteFleetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteFleetsRequest struct {
	QueryParams GetDeleteFleetsQueryParams
	Headers     GetDeleteFleetsHeaders
}

type GetDeleteFleetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
