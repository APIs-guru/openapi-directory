package shared



type Action struct {
    CrossRegionCopy []CrossRegionCopyAction `json:"CrossRegionCopy"`
    Name string `json:"Name"`
    
}

