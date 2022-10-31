package shared



type DeleteFhirDatastoreResponse struct {
    DatastoreArn string `json:"DatastoreArn"`
    DatastoreEndpoint string `json:"DatastoreEndpoint"`
    DatastoreID string `json:"DatastoreId"`
    DatastoreStatus DatastoreStatusEnum `json:"DatastoreStatus"`
    
}

