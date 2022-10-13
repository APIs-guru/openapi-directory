package shared

type GetTestGridSessionRequest struct {
	ProjectArn *string `json:"projectArn"`
	SessionArn *string `json:"sessionArn"`
	SessionID  *string `json:"sessionId"`
}
