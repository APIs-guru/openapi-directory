# CreateInventoryTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_type** | **str** | The feed type associated with the inventory task you are about to create. Use a &lt;strong&gt;feedType&lt;/strong&gt; that is available for your API. Presently, only one feed type is available:&lt;ul&gt;&lt;li&gt;&lt;code&gt;LMS_ACTIVE_INVENTORY_REPORT&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br/&gt;See &lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Report download feed types&lt;/a&gt; for more information. | [optional] 
**filter_criteria** | [**InventoryFilterCriteria**](InventoryFilterCriteria.md) |  | [optional] 
**schema_version** | **str** | The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):&lt;ul&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Version Details / Schema Version&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Seller Hub feed schema version&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] 

## Example

```python
from openapi_client.models.create_inventory_task_request import CreateInventoryTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInventoryTaskRequest from a JSON string
create_inventory_task_request_instance = CreateInventoryTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInventoryTaskRequest.to_json())

# convert the object into a dict
create_inventory_task_request_dict = create_inventory_task_request_instance.to_dict()
# create an instance of CreateInventoryTaskRequest from a dict
create_inventory_task_request_from_dict = CreateInventoryTaskRequest.from_dict(create_inventory_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


