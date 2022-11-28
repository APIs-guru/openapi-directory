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
    
    req := operations.BatchCreateTableRowsRequest{
        PathParams: operations.BatchCreateTableRowsPathParams{
            TableID: "nobis",
            WorkbookID: "iste",
        },
        Headers: operations.BatchCreateTableRowsHeaders{
            XAmzAlgorithm: "pariatur",
            XAmzContentSha256: "expedita",
            XAmzCredential: "impedit",
            XAmzDate: "rerum",
            XAmzSecurityToken: "reiciendis",
            XAmzSignature: "in",
            XAmzSignedHeaders: "assumenda",
        },
        Request: operations.BatchCreateTableRowsRequestBody{
            ClientRequestToken: "modi",
            RowsToCreate: []shared.CreateRowData{
                shared.CreateRowData{
                    BatchItemID: "vel",
                    CellsToCreate: map[string]shared.CellInput{
                        "beatae": shared.CellInput{
                            Fact: "consectetur",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Sdk.BatchCreateTableRows(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateTableRowsResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchCreateTableRows` - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* `BatchDeleteTableRows` -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* `BatchUpdateTableRows` - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `BatchUpsertTableRows` - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `DescribeTableDataImportJob` -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* `GetScreenData` -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* `InvokeScreenAutomation` -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* `ListTableColumns` -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* `ListTableRows` -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* `ListTables` -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* `QueryTableRows` -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* `StartTableDataImportJob` -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
