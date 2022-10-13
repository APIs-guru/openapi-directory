package shared

type VirtualServiceData struct {
	MeshName           string               `json:"meshName"`
	Metadata           ResourceMetadata     `json:"metadata"`
	Spec               VirtualServiceSpec   `json:"spec"`
	Status             VirtualServiceStatus `json:"status"`
	VirtualServiceName string               `json:"virtualServiceName"`
}
