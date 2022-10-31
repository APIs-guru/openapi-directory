package shared

type BatchDisassociateClientDeviceFromCoreDeviceResponse struct {
	ErrorEntries []DisassociateClientDeviceFromCoreDeviceErrorEntry `json:"errorEntries,omitempty"`
}
