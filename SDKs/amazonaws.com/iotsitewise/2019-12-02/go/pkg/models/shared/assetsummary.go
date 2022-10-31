package shared

import (
"time")

type AssetSummary struct {
    Arn string `json:"arn"`
    AssetModelID string `json:"assetModelId"`
    CreationDate time.Time `json:"creationDate"`
    Hierarchies []AssetHierarchy `json:"hierarchies"`
    ID string `json:"id"`
    LastUpdateDate time.Time `json:"lastUpdateDate"`
    Name string `json:"name"`
    Status AssetStatus `json:"status"`
    
}

