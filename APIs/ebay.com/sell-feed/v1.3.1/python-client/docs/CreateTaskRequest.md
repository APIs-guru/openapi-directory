# CreateTaskRequest

The type that defines the fields for the <b> createTask</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed_type** | **str** | The feed type associated with the task. Only use a &lt;strong&gt;feedType&lt;/strong&gt; that is available for your API. Available feed types:&lt;ul&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#trading-upload-feed-types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Inventory upload feed types&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-upload-feed-types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Fulfillment upload feed types&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/fx-feeds-quick-reference.html#availabl\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Seller Hub feed types&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] 
**schema_version** | **str** | The schemaVersion/version number of the file format (use the schema version of the API to which you are programming):&lt;ul&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/lms-feeds-quick-reference.html#Version\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Version Details / Schema Version&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href&#x3D;\&quot;/api-docs/sell/static/feed/fx-feeds-quick-reference.html#schema\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Seller Hub feed schema version&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] 

## Example

```python
from openapi_client.models.create_task_request import CreateTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTaskRequest from a JSON string
create_task_request_instance = CreateTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTaskRequest.to_json())

# convert the object into a dict
create_task_request_dict = create_task_request_instance.to_dict()
# create an instance of CreateTaskRequest from a dict
create_task_request_from_dict = CreateTaskRequest.from_dict(create_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


