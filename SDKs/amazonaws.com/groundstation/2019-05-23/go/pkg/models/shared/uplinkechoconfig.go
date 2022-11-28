package shared

// UplinkEchoConfig
// <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
type UplinkEchoConfig struct {
	AntennaUplinkConfigArn string `json:"antennaUplinkConfigArn"`
	Enabled                bool   `json:"enabled"`
}
