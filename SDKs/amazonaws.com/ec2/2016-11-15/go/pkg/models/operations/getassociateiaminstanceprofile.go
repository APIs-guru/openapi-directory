package operations

type GetAssociateIamInstanceProfileActionEnum string

const (
	GetAssociateIamInstanceProfileActionEnumAssociateIamInstanceProfile GetAssociateIamInstanceProfileActionEnum = "AssociateIamInstanceProfile"
)

// GetAssociateIamInstanceProfileIamInstanceProfile
// Describes an IAM instance profile.
type GetAssociateIamInstanceProfileIamInstanceProfile struct {
	Arn  *string `queryParam:"name=Arn"`
	Name *string `queryParam:"name=Name"`
}

type GetAssociateIamInstanceProfileVersionEnum string

const (
	GetAssociateIamInstanceProfileVersionEnumTwoThousandAndSixteen1115 GetAssociateIamInstanceProfileVersionEnum = "2016-11-15"
)

type GetAssociateIamInstanceProfileQueryParams struct {
	Action             GetAssociateIamInstanceProfileActionEnum         `queryParam:"style=form,explode=true,name=Action"`
	IamInstanceProfile GetAssociateIamInstanceProfileIamInstanceProfile `queryParam:"style=form,explode=true,name=IamInstanceProfile"`
	InstanceID         string                                           `queryParam:"style=form,explode=true,name=InstanceId"`
	Version            GetAssociateIamInstanceProfileVersionEnum        `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateIamInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociateIamInstanceProfileRequest struct {
	QueryParams GetAssociateIamInstanceProfileQueryParams
	Headers     GetAssociateIamInstanceProfileHeaders
}

type GetAssociateIamInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
