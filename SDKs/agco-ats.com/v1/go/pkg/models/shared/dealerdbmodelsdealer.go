package shared

type DealerDbModelsDealer struct {
	BillingAddress         *string  `json:"BillingAddress"`
	BillingAddress2        *string  `json:"BillingAddress2"`
	BillingAddress3        *string  `json:"BillingAddress3"`
	BillingAddress4        *string  `json:"BillingAddress4"`
	BillingCity            *string  `json:"BillingCity"`
	BillingCountry         *string  `json:"BillingCountry"`
	BillingCountryCode     *string  `json:"BillingCountryCode"`
	BillingState           *string  `json:"BillingState"`
	BillingZip             *string  `json:"BillingZip"`
	Brands                 []string `json:"Brands"`
	DealerCode             *string  `json:"DealerCode"`
	DealerName             *string  `json:"DealerName"`
	DealerStatus           *string  `json:"DealerStatus"`
	DealerStatusUpdateDate *string  `json:"DealerStatusUpdateDate"`
	Filler                 *string  `json:"Filler"`
	IsValid                *bool    `json:"IsValid"`
	LanguagePreference     *string  `json:"LanguagePreference"`
	Region1                *string  `json:"Region1"`
	Region2                *string  `json:"Region2"`
	RegionMapping          *string  `json:"RegionMapping"`
	RoleBrand              *string  `json:"RoleBrand"`
	ShippingAddress2       *string  `json:"ShippingAddress2"`
	ShippingAddress3       *string  `json:"ShippingAddress3"`
	ShippingAddress4       *string  `json:"ShippingAddress4"`
	ShippingCity           *string  `json:"ShippingCity"`
	ShippingCountry        *string  `json:"ShippingCountry"`
	ShippingState          *string  `json:"ShippingState"`
	ShippingStreet         *string  `json:"ShippingStreet"`
	ShippingZip            *string  `json:"ShippingZip"`
	Telephone              *string  `json:"Telephone"`
	VatCode                *string  `json:"VATCode"`
}
