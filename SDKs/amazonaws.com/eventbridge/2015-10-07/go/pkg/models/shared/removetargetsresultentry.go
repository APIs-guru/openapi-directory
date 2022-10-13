package shared

type RemoveTargetsResultEntry struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	TargetID     *string `json:"TargetId"`
}
