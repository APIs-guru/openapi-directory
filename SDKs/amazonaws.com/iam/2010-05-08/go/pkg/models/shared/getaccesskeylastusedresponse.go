package shared

// GetAccessKeyLastUsedResponse
// Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
type GetAccessKeyLastUsedResponse struct {
	AccessKeyLastUsed *AccessKeyLastUsed
	UserName          *string
}
