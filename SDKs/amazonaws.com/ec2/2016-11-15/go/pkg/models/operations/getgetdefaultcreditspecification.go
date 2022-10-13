package operations

type GetGetDefaultCreditSpecificationActionEnum string

const (
	GetGetDefaultCreditSpecificationActionEnumGetDefaultCreditSpecification GetGetDefaultCreditSpecificationActionEnum = "GetDefaultCreditSpecification"
)

type GetGetDefaultCreditSpecificationInstanceFamilyEnum string

const (
	GetGetDefaultCreditSpecificationInstanceFamilyEnumT2  GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t2"
	GetGetDefaultCreditSpecificationInstanceFamilyEnumT3  GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t3"
	GetGetDefaultCreditSpecificationInstanceFamilyEnumT3a GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t3a"
	GetGetDefaultCreditSpecificationInstanceFamilyEnumT4g GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t4g"
)

type GetGetDefaultCreditSpecificationVersionEnum string

const (
	GetGetDefaultCreditSpecificationVersionEnumTwoThousandAndSixteen1115 GetGetDefaultCreditSpecificationVersionEnum = "2016-11-15"
)

type GetGetDefaultCreditSpecificationQueryParams struct {
	Action         GetGetDefaultCreditSpecificationActionEnum         `queryParam:"style=form,explode=true,name=Action"`
	DryRun         *bool                                              `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceFamily GetGetDefaultCreditSpecificationInstanceFamilyEnum `queryParam:"style=form,explode=true,name=InstanceFamily"`
	Version        GetGetDefaultCreditSpecificationVersionEnum        `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetDefaultCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetDefaultCreditSpecificationRequest struct {
	QueryParams GetGetDefaultCreditSpecificationQueryParams
	Headers     GetGetDefaultCreditSpecificationHeaders
}

type GetGetDefaultCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
