package shared

type GetTestGridSessionRequest struct {
	ProjectArn *string `json:"projectArn,omitempty"`
	SessionArn *string `json:"sessionArn,omitempty"`
	SessionID  *string `json:"sessionId,omitempty"`
}
