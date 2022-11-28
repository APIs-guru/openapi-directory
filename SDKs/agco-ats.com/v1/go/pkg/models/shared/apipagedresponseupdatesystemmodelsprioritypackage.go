package shared

// APIPagedResponseUpdateSystemModelsPriorityPackage
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsPriorityPackage struct {
	Entities []UpdateSystemModelsPriorityPackage `json:"Entities"`
	Metadata APIPagedResponseMetadata            `json:"Metadata"`
}
