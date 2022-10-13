package shared

type CreateStreamingURLRequest struct {
	ApplicationID  *string `json:"ApplicationId"`
	FleetName      string  `json:"FleetName"`
	SessionContext *string `json:"SessionContext"`
	StackName      string  `json:"StackName"`
	UserID         string  `json:"UserId"`
	Validity       *int64  `json:"Validity"`
}
