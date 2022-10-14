package shared

type CreateStreamingURLRequest struct {
	ApplicationID  *string `json:"ApplicationId,omitempty"`
	FleetName      string  `json:"FleetName"`
	SessionContext *string `json:"SessionContext,omitempty"`
	StackName      string  `json:"StackName"`
	UserID         string  `json:"UserId"`
	Validity       *int64  `json:"Validity,omitempty"`
}
