package shared

type ErrorDetail struct {
	DetailedErrorCode    *string `json:"DetailedErrorCode"`
	DetailedErrorMessage *string `json:"DetailedErrorMessage"`
}
