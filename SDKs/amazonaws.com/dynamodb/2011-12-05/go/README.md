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
    
    req := operations.BatchGetItemRequest{
        QueryParams: operations.BatchGetItemQueryParams{
            RequestItems: "aut",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "voluptate",
            XAmzContentSha256: "a",
            XAmzCredential: "consequatur",
            XAmzDate: "dolore",
            XAmzSecurityToken: "assumenda",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "non",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "labore": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "iure",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "molestiae",
                                Bs: []string{
                                    "nostrum",
                                    "aut",
                                },
                                N: "ut",
                                Ns: []string{
                                    "pariatur",
                                },
                                S: "enim",
                                Ss: []string{
                                    "aut",
                                    "ea",
                                    "magnam",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "et",
                                Bs: []string{
                                    "pariatur",
                                    "eum",
                                    "quaerat",
                                },
                                N: "modi",
                                Ns: []string{
                                    "doloremque",
                                    "nulla",
                                },
                                S: "et",
                                Ss: []string{
                                    "praesentium",
                                    "labore",
                                    "accusamus",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "aut",
                                Bs: []string{
                                    "impedit",
                                },
                                N: "aperiam",
                                Ns: []string{
                                    "dolorum",
                                    "iusto",
                                },
                                S: "quos",
                                Ss: []string{
                                    "adipisci",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quo",
                                Bs: []string{
                                    "ipsum",
                                    "delectus",
                                    "tenetur",
                                },
                                N: "expedita",
                                Ns: []string{
                                    "ut",
                                    "sed",
                                },
                                S: "qui",
                                Ss: []string{
                                    "autem",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "fuga",
                                Bs: []string{
                                    "aliquid",
                                    "molestias",
                                },
                                N: "nihil",
                                Ns: []string{
                                    "quae",
                                    "et",
                                    "quae",
                                },
                                S: "natus",
                                Ss: []string{
                                    "corrupti",
                                    "ipsum",
                                    "asperiores",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "eligendi",
                                Bs: []string{
                                    "sit",
                                },
                                N: "reiciendis",
                                Ns: []string{
                                    "sit",
                                    "eaque",
                                },
                                S: "debitis",
                                Ss: []string{
                                    "sapiente",
                                    "eum",
                                },
                            },
                        },
                    },
                },
                "incidunt": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "neque",
                        "quo",
                        "omnis",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "cupiditate",
                                Bs: []string{
                                    "odit",
                                    "hic",
                                },
                                N: "porro",
                                Ns: []string{
                                    "minima",
                                    "at",
                                    "maiores",
                                },
                                S: "rem",
                                Ss: []string{
                                    "aliquid",
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "at",
                                Bs: []string{
                                    "qui",
                                    "ea",
                                    "illo",
                                },
                                N: "voluptas",
                                Ns: []string{
                                    "debitis",
                                    "in",
                                    "at",
                                },
                                S: "vero",
                                Ss: []string{
                                    "nisi",
                                    "qui",
                                    "quasi",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "quis",
                                Bs: []string{
                                    "nesciunt",
                                },
                                N: "fugit",
                                Ns: []string{
                                    "consequuntur",
                                    "dignissimos",
                                    "magni",
                                },
                                S: "ipsum",
                                Ss: []string{
                                    "quia",
                                    "sit",
                                    "qui",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "qui",
                                Bs: []string{
                                    "excepturi",
                                    "sapiente",
                                    "doloribus",
                                },
                                N: "accusantium",
                                Ns: []string{
                                    "rem",
                                    "corporis",
                                    "pariatur",
                                },
                                S: "maiores",
                                Ss: []string{
                                    "animi",
                                    "minima",
                                    "beatae",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "iste",
                                Bs: []string{
                                    "fuga",
                                    "corporis",
                                    "quo",
                                },
                                N: "laborum",
                                Ns: []string{
                                    "ad",
                                },
                                S: "voluptatem",
                                Ss: []string{
                                    "et",
                                    "sunt",
                                    "ratione",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quidem",
                                Bs: []string{
                                    "iure",
                                    "incidunt",
                                    "iusto",
                                },
                                N: "voluptatibus",
                                Ns: []string{
                                    "quia",
                                    "tenetur",
                                },
                                S: "et",
                                Ss: []string{
                                    "accusamus",
                                    "aliquam",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Sdk.BatchGetItem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchGetItem` - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* `BatchWriteItem` - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* `CreateTable` - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* `DeleteItem` - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* `DeleteTable` - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `DescribeTable` - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `GetItem` - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* `ListTables` - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* `PutItem` - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* `Query` - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* `Scan` - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* `UpdateItem` - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* `UpdateTable` - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
