package shared



type ProvisionedThroughput struct {
    ReadCapacityUnits int64 `json:"ReadCapacityUnits"`
    WriteCapacityUnits int64 `json:"WriteCapacityUnits"`
    
}

