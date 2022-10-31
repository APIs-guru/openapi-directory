package shared

type DealerDbModelsDealer struct {
	BillingAddress         *string  `json:"BillingAddress,omitempty"`
	BillingAddress2        *string  `json:"BillingAddress2,omitempty"`
	BillingAddress3        *string  `json:"BillingAddress3,omitempty"`
	BillingAddress4        *string  `json:"BillingAddress4,omitempty"`
	BillingCity            *string  `json:"BillingCity,omitempty"`
	BillingCountry         *string  `json:"BillingCountry,omitempty"`
	BillingCountryCode     *string  `json:"BillingCountryCode,omitempty"`
	BillingState           *string  `json:"BillingState,omitempty"`
	BillingZip             *string  `json:"BillingZip,omitempty"`
	Brands                 []string `json:"Brands,omitempty"`
	DealerCode             *string  `json:"DealerCode,omitempty"`
	DealerName             *string  `json:"DealerName,omitempty"`
	DealerStatus           *string  `json:"DealerStatus,omitempty"`
	DealerStatusUpdateDate *string  `json:"DealerStatusUpdateDate,omitempty"`
	Filler                 *string  `json:"Filler,omitempty"`
	IsValid                *bool    `json:"IsValid,omitempty"`
	LanguagePreference     *string  `json:"LanguagePreference,omitempty"`
	Region1                *string  `json:"Region1,omitempty"`
	Region2                *string  `json:"Region2,omitempty"`
	RegionMapping          *string  `json:"RegionMapping,omitempty"`
	RoleBrand              *string  `json:"RoleBrand,omitempty"`
	ShippingAddress2       *string  `json:"ShippingAddress2,omitempty"`
	ShippingAddress3       *string  `json:"ShippingAddress3,omitempty"`
	ShippingAddress4       *string  `json:"ShippingAddress4,omitempty"`
	ShippingCity           *string  `json:"ShippingCity,omitempty"`
	ShippingCountry        *string  `json:"ShippingCountry,omitempty"`
	ShippingState          *string  `json:"ShippingState,omitempty"`
	ShippingStreet         *string  `json:"ShippingStreet,omitempty"`
	ShippingZip            *string  `json:"ShippingZip,omitempty"`
	Telephone              *string  `json:"Telephone,omitempty"`
	VatCode                *string  `json:"VATCode,omitempty"`
}
