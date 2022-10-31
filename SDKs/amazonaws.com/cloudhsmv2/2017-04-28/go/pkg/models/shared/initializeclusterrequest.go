package shared



type InitializeClusterRequest struct {
    ClusterID string `json:"ClusterId"`
    SignedCert string `json:"SignedCert"`
    TrustAnchor string `json:"TrustAnchor"`
    
}

