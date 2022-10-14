package shared

type GetConnectivityInfoResponse struct {
	ConnectivityInfo []ConnectivityInfo `json:"ConnectivityInfo,omitempty"`
	Message          *string            `json:"Message,omitempty"`
}
