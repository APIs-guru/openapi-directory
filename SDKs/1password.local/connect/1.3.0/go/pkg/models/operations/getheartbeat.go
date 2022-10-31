package operations


var GetHeartbeatServers = []string{
	"http://localhost:8080",
}

type GetHeartbeatRequest struct {
    ServerURL *string 
    
}

type GetHeartbeatResponse struct {
    ContentType string 
    GetHeartbeat200TextPlainString *string 
    StatusCode int64 
    
}

