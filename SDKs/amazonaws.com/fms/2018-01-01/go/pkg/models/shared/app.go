package shared

// App
// An individual Firewall Manager application.
type App struct {
	AppName  string `json:"AppName"`
	Port     int64  `json:"Port"`
	Protocol string `json:"Protocol"`
}
