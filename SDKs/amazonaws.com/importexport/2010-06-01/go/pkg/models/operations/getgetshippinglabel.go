package operations

type GetGetShippingLabelActionEnum string

const (
	GetGetShippingLabelActionEnumGetShippingLabel GetGetShippingLabelActionEnum = "GetShippingLabel"
)

type GetGetShippingLabelOperationEnum string

const (
	GetGetShippingLabelOperationEnumGetShippingLabel GetGetShippingLabelOperationEnum = "GetShippingLabel"
)

type GetGetShippingLabelVersionEnum string

const (
	GetGetShippingLabelVersionEnumTwoThousandAndTen0601 GetGetShippingLabelVersionEnum = "2010-06-01"
)

type GetGetShippingLabelQueryParams struct {
	APIVersion       *string                          `queryParam:"style=form,explode=true,name=APIVersion"`
	AwsAccessKeyID   string                           `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetGetShippingLabelActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Operation        GetGetShippingLabelOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                           `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                           `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                           `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                           `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          GetGetShippingLabelVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
	City             *string                          `queryParam:"style=form,explode=true,name=city"`
	Company          *string                          `queryParam:"style=form,explode=true,name=company"`
	Country          *string                          `queryParam:"style=form,explode=true,name=country"`
	JobIds           []string                         `queryParam:"style=form,explode=true,name=jobIds"`
	Name             *string                          `queryParam:"style=form,explode=true,name=name"`
	PhoneNumber      *string                          `queryParam:"style=form,explode=true,name=phoneNumber"`
	PostalCode       *string                          `queryParam:"style=form,explode=true,name=postalCode"`
	StateOrProvince  *string                          `queryParam:"style=form,explode=true,name=stateOrProvince"`
	Street1          *string                          `queryParam:"style=form,explode=true,name=street1"`
	Street2          *string                          `queryParam:"style=form,explode=true,name=street2"`
	Street3          *string                          `queryParam:"style=form,explode=true,name=street3"`
}

type GetGetShippingLabelRequest struct {
	QueryParams GetGetShippingLabelQueryParams
}

type GetGetShippingLabelResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
