package shared

type ListPoliciesGrantingServiceAccessResponse struct {
	IsTruncated                   *bool
	Marker                        *string
	PoliciesGrantingServiceAccess []ListPoliciesGrantingServiceAccessEntry
}
