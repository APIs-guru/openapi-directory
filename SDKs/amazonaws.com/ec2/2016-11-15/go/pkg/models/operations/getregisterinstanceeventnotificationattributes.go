package operations

type GetRegisterInstanceEventNotificationAttributesActionEnum string

const (
	GetRegisterInstanceEventNotificationAttributesActionEnumRegisterInstanceEventNotificationAttributes GetRegisterInstanceEventNotificationAttributesActionEnum = "RegisterInstanceEventNotificationAttributes"
)

// GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute
// Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
