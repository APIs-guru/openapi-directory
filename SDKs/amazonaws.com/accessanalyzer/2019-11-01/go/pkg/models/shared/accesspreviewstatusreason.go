package shared

// AccessPreviewStatusReason
// Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
type AccessPreviewStatusReason struct {
	Code AccessPreviewStatusReasonCodeEnum `json:"code"`
}
