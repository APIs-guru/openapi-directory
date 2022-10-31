package operations

type PostPurchaseReservedInstancesOfferingActionEnum string

const (
	PostPurchaseReservedInstancesOfferingActionEnumPurchaseReservedInstancesOffering PostPurchaseReservedInstancesOfferingActionEnum = "PurchaseReservedInstancesOffering"
)

type PostPurchaseReservedInstancesOfferingVersionEnum string

const (
	PostPurchaseReservedInstancesOfferingVersionEnumTwoThousandAndSixteen1115 PostPurchaseReservedInstancesOfferingVersionEnum = "2016-11-15"
)

type PostPurchaseReservedInstancesOfferingQueryParams struct {
	Action  PostPurchaseReservedInstancesOfferingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPurchaseReservedInstancesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPurchaseReservedInstancesOfferingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPurchaseReservedInstancesOfferingRequest struct {
	QueryParams PostPurchaseReservedInstancesOfferingQueryParams
	Headers     PostPurchaseReservedInstancesOfferingHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPurchaseReservedInstancesOfferingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
