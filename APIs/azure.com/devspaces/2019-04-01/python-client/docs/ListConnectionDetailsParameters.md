# ListConnectionDetailsParameters

Parameters for listing connection details of an Azure Dev Spaces Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_container_host_resource_id** | **str** | Resource ID of the target container host mapped to the Azure Dev Spaces Controller. | 

## Example

```python
from openapi_client.models.list_connection_details_parameters import ListConnectionDetailsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectionDetailsParameters from a JSON string
list_connection_details_parameters_instance = ListConnectionDetailsParameters.from_json(json)
# print the JSON string representation of the object
print(ListConnectionDetailsParameters.to_json())

# convert the object into a dict
list_connection_details_parameters_dict = list_connection_details_parameters_instance.to_dict()
# create an instance of ListConnectionDetailsParameters from a dict
list_connection_details_parameters_from_dict = ListConnectionDetailsParameters.from_dict(list_connection_details_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


