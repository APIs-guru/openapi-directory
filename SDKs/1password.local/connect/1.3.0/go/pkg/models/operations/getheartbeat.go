package operations

var GetHeartbeatServers = []string{
	"http://localhost:8080",
}

type GetHeartbeatRequest struct {
	ServerURL *string
}

type GetHeartbeatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
