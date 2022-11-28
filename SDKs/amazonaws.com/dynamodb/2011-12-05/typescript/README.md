# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { BatchGetItemRequest, BatchGetItemResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetItemRequest = {
  queryParams: {
    requestItems: "aut",
  },
  headers: {
    xAmzAlgorithm: "voluptate",
    xAmzContentSha256: "a",
    xAmzCredential: "consequatur",
    xAmzDate: "dolore",
    xAmzSecurityToken: "assumenda",
    xAmzSignature: "rerum",
    xAmzSignedHeaders: "non",
    xAmzTarget: "DynamoDB_20111205.BatchGetItem",
  },
  request: {
    requestItems: {
      "labore": {
        attributesToGet: [
          "iure",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "molestiae",
              bs: [
                "nostrum",
                "aut",
              ],
              n: "ut",
              ns: [
                "pariatur",
              ],
              s: "enim",
              ss: [
                "aut",
                "ea",
                "magnam",
              ],
            },
            rangeKeyElement: {
              b: "et",
              bs: [
                "pariatur",
                "eum",
                "quaerat",
              ],
              n: "modi",
              ns: [
                "doloremque",
                "nulla",
              ],
              s: "et",
              ss: [
                "praesentium",
                "labore",
                "accusamus",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "aut",
              bs: [
                "impedit",
              ],
              n: "aperiam",
              ns: [
                "dolorum",
                "iusto",
              ],
              s: "quos",
              ss: [
                "adipisci",
              ],
            },
            rangeKeyElement: {
              b: "quo",
              bs: [
                "ipsum",
                "delectus",
                "tenetur",
              ],
              n: "expedita",
              ns: [
                "ut",
                "sed",
              ],
              s: "qui",
              ss: [
                "autem",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "fuga",
              bs: [
                "aliquid",
                "molestias",
              ],
              n: "nihil",
              ns: [
                "quae",
                "et",
                "quae",
              ],
              s: "natus",
              ss: [
                "corrupti",
                "ipsum",
                "asperiores",
              ],
            },
            rangeKeyElement: {
              b: "eligendi",
              bs: [
                "sit",
              ],
              n: "reiciendis",
              ns: [
                "sit",
                "eaque",
              ],
              s: "debitis",
              ss: [
                "sapiente",
                "eum",
              ],
            },
          },
        ],
      },
      "incidunt": {
        attributesToGet: [
          "neque",
          "quo",
          "omnis",
        ],
        consistentRead: false,
        keys: [
          {
            hashKeyElement: {
              b: "cupiditate",
              bs: [
                "odit",
                "hic",
              ],
              n: "porro",
              ns: [
                "minima",
                "at",
                "maiores",
              ],
              s: "rem",
              ss: [
                "aliquid",
                "iste",
              ],
            },
            rangeKeyElement: {
              b: "at",
              bs: [
                "qui",
                "ea",
                "illo",
              ],
              n: "voluptas",
              ns: [
                "debitis",
                "in",
                "at",
              ],
              s: "vero",
              ss: [
                "nisi",
                "qui",
                "quasi",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "quis",
              bs: [
                "nesciunt",
              ],
              n: "fugit",
              ns: [
                "consequuntur",
                "dignissimos",
                "magni",
              ],
              s: "ipsum",
              ss: [
                "quia",
                "sit",
                "qui",
              ],
            },
            rangeKeyElement: {
              b: "qui",
              bs: [
                "excepturi",
                "sapiente",
                "doloribus",
              ],
              n: "accusantium",
              ns: [
                "rem",
                "corporis",
                "pariatur",
              ],
              s: "maiores",
              ss: [
                "animi",
                "minima",
                "beatae",
              ],
            },
          },
          {
            hashKeyElement: {
              b: "iste",
              bs: [
                "fuga",
                "corporis",
                "quo",
              ],
              n: "laborum",
              ns: [
                "ad",
              ],
              s: "voluptatem",
              ss: [
                "et",
                "sunt",
                "ratione",
              ],
            },
            rangeKeyElement: {
              b: "quidem",
              bs: [
                "iure",
                "incidunt",
                "iusto",
              ],
              n: "voluptatibus",
              ns: [
                "quia",
                "tenetur",
              ],
              s: "et",
              ss: [
                "accusamus",
                "aliquam",
              ],
            },
          },
        ],
      },
    },
  },
};

sdk.sdk.batchGetItem(req).then((res: BatchGetItemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchGetItem` - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* `batchWriteItem` - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* `createTable` - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* `deleteItem` - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* `deleteTable` - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `describeTable` - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `getItem` - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* `listTables` - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* `putItem` - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* `query` - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* `scan` - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* `updateItem` - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* `updateTable` - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
