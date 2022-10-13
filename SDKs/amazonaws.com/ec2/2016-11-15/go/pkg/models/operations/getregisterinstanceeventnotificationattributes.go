package operations

type GetRegisterInstanceEventNotificationAttributesActionEnum string

const (
	GetRegisterInstanceEventNotificationAttributesActionEnumRegisterInstanceEventNotificationAttributes GetRegisterInstanceEventNotificationAttributesActionEnum = "RegisterInstanceEventNotificationAttributes"
)

type GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute struct {
	IncludeAllTagsOfInstance *bool    `queryParam:"name=IncludeAllTagsOfInstance"`
	InstanceTagKeys          []string `queryParam:"name=InstanceTagKeys"`
}

type GetRegisterInstanceEventNotificationAttributesVersionEnum string

const (
	GetRegisterInstanceEventNotificationAttributesVersionEnumTwoThousandAndSixteen1115 GetRegisterInstanceEventNotificationAttributesVersionEnum = "2016-11-15"
)

type GetRegisterInstanceEventNotificationAttributesQueryParams struct {
	Action               GetRegisterInstanceEventNotificationAttributesActionEnum            `queryParam:"style=form,explode=true,name=Action"`
	DryRun               *bool                                                               `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceTagAttribute *GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute `queryParam:"style=form,explode=true,name=InstanceTagAttribute"`
	Version              GetRegisterInstanceEventNotificationAttributesVersionEnum           `queryParam:"style=form,explode=true,name=Version"`
}

type GetRegisterInstanceEventNotificationAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRegisterInstanceEventNotificationAttributesRequest struct {
	QueryParams GetRegisterInstanceEventNotificationAttributesQueryParams
	Headers     GetRegisterInstanceEventNotificationAttributesHeaders
}

type GetRegisterInstanceEventNotificationAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
