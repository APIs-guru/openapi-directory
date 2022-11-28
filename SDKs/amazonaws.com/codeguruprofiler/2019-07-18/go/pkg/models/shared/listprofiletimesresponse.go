package shared

// ListProfileTimesResponse
// The structure representing the listProfileTimesResponse.
type ListProfileTimesResponse struct {
	NextToken    *string       `json:"nextToken,omitempty"`
	ProfileTimes []ProfileTime `json:"profileTimes"`
}
