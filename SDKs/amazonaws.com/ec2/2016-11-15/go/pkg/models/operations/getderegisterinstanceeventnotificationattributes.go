package operations

type GetDeregisterInstanceEventNotificationAttributesActionEnum string

const (
	GetDeregisterInstanceEventNotificationAttributesActionEnumDeregisterInstanceEventNotificationAttributes GetDeregisterInstanceEventNotificationAttributesActionEnum = "DeregisterInstanceEventNotificationAttributes"
)

type GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute struct {
	IncludeAllTagsOfInstance *bool    `queryParam:"name=IncludeAllTagsOfInstance"`
	InstanceTagKeys          []string `queryParam:"name=InstanceTagKeys"`
}

type GetDeregisterInstanceEventNotificationAttributesVersionEnum string

const (
	GetDeregisterInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 GetDeregisterInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)

type GetDeregisterInstanceEventNotificationAttributesQueryParams struct {
	Action               GetDeregisterInstanceEventNotificationAttributesActionEnum            `queryParam:"style=form,explode=true,name=Action"`
	DryRun               *bool                                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceTagAttribute *GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute `queryParam:"style=form,explode=true,name=InstanceTagAttribute"`
	Version              GetDeregisterInstanceEventNotificationAttributesVersionEnum           `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeregisterInstanceEventNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeregisterInstanceEventNotificationAttributesRequest struct {
	QueryParams GetDeregisterInstanceEventNotificationAttributesQueryParams
	Headers     GetDeregisterInstanceEventNotificationAttributesHeaders
}

type GetDeregisterInstanceEventNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
