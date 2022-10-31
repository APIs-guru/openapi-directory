package shared



type CreateAssetModelResponse struct {
    AssetModelArn string `json:"assetModelArn"`
    AssetModelID string `json:"assetModelId"`
    AssetModelStatus AssetModelStatus `json:"assetModelStatus"`
    
}

