package shared

import (
"time")

type DescribeAssetModelResponse struct {
    AssetModelArn string `json:"assetModelArn"`
    AssetModelCompositeModels []AssetModelCompositeModel `json:"assetModelCompositeModels,omitempty"`
    AssetModelCreationDate time.Time `json:"assetModelCreationDate"`
    AssetModelDescription string `json:"assetModelDescription"`
    AssetModelHierarchies []AssetModelHierarchy `json:"assetModelHierarchies"`
    AssetModelID string `json:"assetModelId"`
    AssetModelLastUpdateDate time.Time `json:"assetModelLastUpdateDate"`
    AssetModelName string `json:"assetModelName"`
    AssetModelProperties []AssetModelProperty `json:"assetModelProperties"`
    AssetModelStatus AssetModelStatus `json:"assetModelStatus"`
    
}

