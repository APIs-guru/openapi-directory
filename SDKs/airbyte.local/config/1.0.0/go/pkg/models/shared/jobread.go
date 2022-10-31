package shared



type JobRead struct {
    ConfigID string `json:"configId"`
    ConfigType JobConfigTypeEnum `json:"configType"`
    CreatedAt int64 `json:"createdAt"`
    ID int64 `json:"id"`
    Status JobStatusEnum `json:"status"`
    UpdatedAt int64 `json:"updatedAt"`
    
}

