# CreateSdfDownloadTaskRequest

Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser to download SDF for. | [optional] 
**id_filter** | [**IdFilter**](IdFilter.md) |  | [optional] 
**inventory_source_filter** | [**InventorySourceFilter**](InventorySourceFilter.md) |  | [optional] 
**parent_entity_filter** | [**ParentEntityFilter**](ParentEntityFilter.md) |  | [optional] 
**partner_id** | **str** | The ID of the partner to download SDF for. | [optional] 
**version** | **str** | Required. The SDF version of the downloaded file. If set to &#x60;SDF_VERSION_UNSPECIFIED&#x60;, this will default to the version specified by the advertiser or partner identified by &#x60;root_id&#x60;. An advertiser inherits its SDF version from its partner unless configured otherwise. | [optional] 

## Example

```python
from openapi_client.models.create_sdf_download_task_request import CreateSdfDownloadTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSdfDownloadTaskRequest from a JSON string
create_sdf_download_task_request_instance = CreateSdfDownloadTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSdfDownloadTaskRequest.to_json())

# convert the object into a dict
create_sdf_download_task_request_dict = create_sdf_download_task_request_instance.to_dict()
# create an instance of CreateSdfDownloadTaskRequest from a dict
create_sdf_download_task_request_from_dict = CreateSdfDownloadTaskRequest.from_dict(create_sdf_download_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


