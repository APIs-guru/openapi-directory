package shared

// DomainStatus
// The current status of the search domain.
type DomainStatus struct {
	Created                *bool
	Deleted                *bool
	DocService             *ServiceEndpoint
	DomainID               string
	DomainName             string
	NumSearchableDocs      *int64
	Processing             *bool
	RequiresIndexDocuments bool
	SearchInstanceCount    *int64
	SearchInstanceType     *string
	SearchPartitionCount   *int64
	SearchService          *ServiceEndpoint
}
