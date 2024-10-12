# ServiceTagsListResult

Response for the ListServiceTags API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_number** | **str** | The iteration number. | [optional] [readonly] 
**cloud** | **str** | The name of the cloud. | [optional] [readonly] 
**id** | **str** | The ID of the cloud. | [optional] [readonly] 
**name** | **str** | The name of the cloud. | [optional] [readonly] 
**type** | **str** | The azure resource type. | [optional] [readonly] 
**values** | [**List[ServiceTagInformation]**](ServiceTagInformation.md) | The list of service tag information resources. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_tags_list_result import ServiceTagsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTagsListResult from a JSON string
service_tags_list_result_instance = ServiceTagsListResult.from_json(json)
# print the JSON string representation of the object
print(ServiceTagsListResult.to_json())

# convert the object into a dict
service_tags_list_result_dict = service_tags_list_result_instance.to_dict()
# create an instance of ServiceTagsListResult from a dict
service_tags_list_result_from_dict = ServiceTagsListResult.from_dict(service_tags_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


