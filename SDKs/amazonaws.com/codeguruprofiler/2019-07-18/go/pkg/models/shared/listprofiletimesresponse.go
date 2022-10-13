package shared

type ListProfileTimesResponse struct {
	NextToken    *string       `json:"nextToken"`
	ProfileTimes []ProfileTime `json:"profileTimes"`
}
