# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.SearchRequest{
        QueryParams: operations.SearchQueryParams{
            Cursor: "ut",
            Expr: "hic",
            Facet: "veniam",
            Format: "sdk",
            Fq: "ut",
            Highlight: "animi",
            Partial: true,
            Pretty: "true",
            Q: "unde",
            QOptions: "repellat",
            QParser: "lucene",
            Return: "tempore",
            Size: 4592009160050073480,
            Sort: "quia",
            Start: 884502240364205692,
            Stats: "voluptates",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "explicabo",
            XAmzCredential: "qui",
            XAmzDate: "perferendis",
            XAmzSecurityToken: "ipsum",
            XAmzSignature: "autem",
            XAmzSignedHeaders: "perferendis",
        },
    }
    
    res, err := s.Sdk.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `Search` - <p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p> <ul> <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li> <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li> <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li> <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p> <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
* `Suggest` - <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p> <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p> <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
* `UploadDocuments` - <p>Posts a batch of documents to a search domain for indexing. A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service. </p> <p>The endpoint for submitting <code>UploadDocuments</code> requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p> <p>For more information about formatting your data for Amazon CloudSearch, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html">Preparing Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. For more information about uploading data for indexing, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html">Uploading Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
