# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchCreateTableRowsRequest(
    path_params=operations.BatchCreateTableRowsPathParams(
        table_id="nobis",
        workbook_id="iste",
    ),
    headers=operations.BatchCreateTableRowsHeaders(
        x_amz_algorithm="pariatur",
        x_amz_content_sha256="expedita",
        x_amz_credential="impedit",
        x_amz_date="rerum",
        x_amz_security_token="reiciendis",
        x_amz_signature="in",
        x_amz_signed_headers="assumenda",
    ),
    request=operations.BatchCreateTableRowsRequestBody(
        client_request_token="modi",
        rows_to_create=[
            shared.CreateRowData(
                batch_item_id="vel",
                cells_to_create={
                    "beatae": shared.CellInput(
                        fact="consectetur",
                    ),
                },
            ),
        ],
    ),
)
    
res = s.sdk.batch_create_table_rows(req)

if res.batch_create_table_rows_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_create_table_rows` - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* `batch_delete_table_rows` -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* `batch_update_table_rows` - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `batch_upsert_table_rows` - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* `describe_table_data_import_job` -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* `get_screen_data` -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* `invoke_screen_automation` -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* `list_table_columns` -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* `list_table_rows` -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* `list_tables` -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* `query_table_rows` -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* `start_table_data_import_job` -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
