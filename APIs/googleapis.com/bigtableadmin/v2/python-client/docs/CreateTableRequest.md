# CreateTableRequest

Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_splits** | [**List[Split]**](Split.md) | The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, &#x60;s1&#x60; and &#x60;s2&#x60;, three tablets will be created, spanning the key ranges: &#x60;[, s1), [s1, s2), [s2, )&#x60;. Example: * Row keys :&#x3D; &#x60;[\&quot;a\&quot;, \&quot;apple\&quot;, \&quot;custom\&quot;, \&quot;customer_1\&quot;, \&quot;customer_2\&quot;,&#x60; &#x60;\&quot;other\&quot;, \&quot;zz\&quot;]&#x60; * initial_split_keys :&#x3D; &#x60;[\&quot;apple\&quot;, \&quot;customer_1\&quot;, \&quot;customer_2\&quot;, \&quot;other\&quot;]&#x60; * Key assignment: - Tablet 1 &#x60;[, apple) &#x3D;&gt; {\&quot;a\&quot;}.&#x60; - Tablet 2 &#x60;[apple, customer_1) &#x3D;&gt; {\&quot;apple\&quot;, \&quot;custom\&quot;}.&#x60; - Tablet 3 &#x60;[customer_1, customer_2) &#x3D;&gt; {\&quot;customer_1\&quot;}.&#x60; - Tablet 4 &#x60;[customer_2, other) &#x3D;&gt; {\&quot;customer_2\&quot;}.&#x60; - Tablet 5 &#x60;[other, ) &#x3D;&gt; {\&quot;other\&quot;, \&quot;zz\&quot;}.&#x60; | [optional] 
**table** | [**Table**](Table.md) |  | [optional] 
**table_id** | **str** | Required. The name by which the new table should be referred to within the parent instance, e.g., &#x60;foobar&#x60; rather than &#x60;{parent}/tables/foobar&#x60;. Maximum 50 characters. | [optional] 

## Example

```python
from openapi_client.models.create_table_request import CreateTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTableRequest from a JSON string
create_table_request_instance = CreateTableRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTableRequest.to_json())

# convert the object into a dict
create_table_request_dict = create_table_request_instance.to_dict()
# create an instance of CreateTableRequest from a dict
create_table_request_from_dict = CreateTableRequest.from_dict(create_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


