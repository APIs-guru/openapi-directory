package shared

// UpdateUserAttributesResponse
// Represents the response from the server for the request to update user attributes.
type UpdateUserAttributesResponse struct {
	CodeDeliveryDetailsList []CodeDeliveryDetailsType `json:"CodeDeliveryDetailsList,omitempty"`
}
