package shared

type GetConnectivityInfoResponse struct {
	ConnectivityInfo []ConnectivityInfo `json:"ConnectivityInfo"`
	Message          *string            `json:"Message"`
}
