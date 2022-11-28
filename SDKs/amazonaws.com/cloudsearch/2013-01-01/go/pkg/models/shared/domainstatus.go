package shared

// DomainStatus
// The current status of the search domain.
type DomainStatus struct {
	Arn                    *string
	Created                *bool
	Deleted                *bool
	DocService             *ServiceEndpoint
	DomainID               string
	DomainName             string
	Limits                 *Limits
	Processing             *bool
	RequiresIndexDocuments bool
	SearchInstanceCount    *int64
	SearchInstanceType     *string
	SearchPartitionCount   *int64
	SearchService          *ServiceEndpoint
}
