package shared

// InstanceMetadataOptionsResponse
// The metadata options for the instance.
type InstanceMetadataOptionsResponse struct {
	HTTPEndpoint            *InstanceMetadataEndpointStateEnum
	HTTPProtocolIpv6        *InstanceMetadataProtocolStateEnum
	HTTPPutResponseHopLimit *int64
	HTTPTokens              *HTTPTokensStateEnum
	State                   *InstanceMetadataOptionsStateEnum
}
