# InventoryTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_date** | **str** | The timestamp when the task &lt;strong&gt;status&lt;/strong&gt; went into the &lt;code&gt;COMPLETED&lt;/code&gt;, &lt;code&gt;COMPLETED_WITH_ERROR&lt;/code&gt;, or &lt;code&gt;PARTIALLY_PROCESSED&lt;/code&gt; state. This field is only returned if the status is one of the three completed values. | [optional] 
**creation_date** | **str** | The date the task was created. | [optional] 
**detail_href** | **str** | The path to the call URI used to retrieve the task. This field points to the &lt;strong&gt;getInventoryTask&lt;/strong&gt; URI. | [optional] 
**feed_type** | **str** | The feed type associated with the inventory task. | [optional] 
**filter_criteria** | [**InventoryFilterCriteria**](InventoryFilterCriteria.md) |  | [optional] 
**schema_version** | **str** | The schema version number associated with the task. | [optional] 
**status** | **str** | The status of the task. Users must wait until status is complete before moving on to the next step (such as uploading/downloading a file). For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**task_id** | **str** | The ID of the task. This ID is generated when the task was created by the &lt;strong&gt;createInventoryTask&lt;/strong&gt; method. | [optional] 
**upload_summary** | [**UploadSummary**](UploadSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.inventory_task import InventoryTask

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryTask from a JSON string
inventory_task_instance = InventoryTask.from_json(json)
# print the JSON string representation of the object
print(InventoryTask.to_json())

# convert the object into a dict
inventory_task_dict = inventory_task_instance.to_dict()
# create an instance of InventoryTask from a dict
inventory_task_from_dict = InventoryTask.from_dict(inventory_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


