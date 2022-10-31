package shared



type Ulimit struct {
    HardLimit int64 `json:"hardLimit"`
    Name UlimitNameEnum `json:"name"`
    SoftLimit int64 `json:"softLimit"`
    
}

