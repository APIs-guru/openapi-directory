package operations

type PostModifyAvailabilityZoneGroupActionEnum string

const (
	PostModifyAvailabilityZoneGroupActionEnumModifyAvailabilityZoneGroup PostModifyAvailabilityZoneGroupActionEnum = "ModifyAvailabilityZoneGroup"
)

type PostModifyAvailabilityZoneGroupVersionEnum string

const (
	PostModifyAvailabilityZoneGroupVersionEnumTwoThousandAndSixteen1115 PostModifyAvailabilityZoneGroupVersionEnum = "2016-11-15"
)

type PostModifyAvailabilityZoneGroupQueryParams struct {
	Action  PostModifyAvailabilityZoneGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyAvailabilityZoneGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyAvailabilityZoneGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyAvailabilityZoneGroupRequest struct {
	QueryParams PostModifyAvailabilityZoneGroupQueryParams
	Headers     PostModifyAvailabilityZoneGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyAvailabilityZoneGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
