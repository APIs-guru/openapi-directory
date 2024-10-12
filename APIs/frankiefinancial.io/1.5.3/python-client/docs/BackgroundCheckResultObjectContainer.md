# BackgroundCheckResultObjectContainer

Wraps up a BCRO with its internal ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bcro** | [**BackgroundCheckResultObject**](BackgroundCheckResultObject.md) |  | [optional] 
**id** | **str** | Internal ID of this BCRO. Use this if you need to set the status. | [optional] 

## Example

```python
from openapi_client.models.background_check_result_object_container import BackgroundCheckResultObjectContainer

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundCheckResultObjectContainer from a JSON string
background_check_result_object_container_instance = BackgroundCheckResultObjectContainer.from_json(json)
# print the JSON string representation of the object
print(BackgroundCheckResultObjectContainer.to_json())

# convert the object into a dict
background_check_result_object_container_dict = background_check_result_object_container_instance.to_dict()
# create an instance of BackgroundCheckResultObjectContainer from a dict
background_check_result_object_container_from_dict = BackgroundCheckResultObjectContainer.from_dict(background_check_result_object_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


