package operations

type GetModifyDefaultCreditSpecificationActionEnum string

const (
	GetModifyDefaultCreditSpecificationActionEnumModifyDefaultCreditSpecification GetModifyDefaultCreditSpecificationActionEnum = "ModifyDefaultCreditSpecification"
)

type GetModifyDefaultCreditSpecificationInstanceFamilyEnum string

const (
	GetModifyDefaultCreditSpecificationInstanceFamilyEnumT2  GetModifyDefaultCreditSpecificationInstanceFamilyEnum = "t2"
	GetModifyDefaultCreditSpecificationInstanceFamilyEnumT3  GetModifyDefaultCreditSpecificationInstanceFamilyEnum = "t3"
	GetModifyDefaultCreditSpecificationInstanceFamilyEnumT3a GetModifyDefaultCreditSpecificationInstanceFamilyEnum = "t3a"
	GetModifyDefaultCreditSpecificationInstanceFamilyEnumT4g GetModifyDefaultCreditSpecificationInstanceFamilyEnum = "t4g"
)

type GetModifyDefaultCreditSpecificationVersionEnum string

const (
	GetModifyDefaultCreditSpecificationVersionEnumTwoThousandAndSixteen1115 GetModifyDefaultCreditSpecificationVersionEnum = "2016-11-15"
)

type GetModifyDefaultCreditSpecificationQueryParams struct {
	Action         GetModifyDefaultCreditSpecificationActionEnum         `queryParam:"style=form,explode=true,name=Action"`
	CPUCredits     string                                                `queryParam:"style=form,explode=true,name=CpuCredits"`
	DryRun         *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceFamily GetModifyDefaultCreditSpecificationInstanceFamilyEnum `queryParam:"style=form,explode=true,name=InstanceFamily"`
	Version        GetModifyDefaultCreditSpecificationVersionEnum        `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyDefaultCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyDefaultCreditSpecificationRequest struct {
	QueryParams GetModifyDefaultCreditSpecificationQueryParams
	Headers     GetModifyDefaultCreditSpecificationHeaders
}

type GetModifyDefaultCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
