package shared

type ListProfileTimesResponse struct {
	NextToken    *string       `json:"nextToken,omitempty"`
	ProfileTimes []ProfileTime `json:"profileTimes"`
}
