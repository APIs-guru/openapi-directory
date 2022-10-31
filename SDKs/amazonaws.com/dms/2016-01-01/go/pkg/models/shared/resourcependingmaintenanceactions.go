package shared



type ResourcePendingMaintenanceActions struct {
    PendingMaintenanceActionDetails []PendingMaintenanceAction `json:"PendingMaintenanceActionDetails,omitempty"`
    ResourceIdentifier *string `json:"ResourceIdentifier,omitempty"`
    
}

