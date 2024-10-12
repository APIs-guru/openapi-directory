# ControllerConnectionDetailsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_details_list** | [**List[ControllerConnectionDetails]**](ControllerConnectionDetails.md) | List of Azure Dev Spaces Controller connection details. | [optional] 

## Example

```python
from openapi_client.models.controller_connection_details_list import ControllerConnectionDetailsList

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerConnectionDetailsList from a JSON string
controller_connection_details_list_instance = ControllerConnectionDetailsList.from_json(json)
# print the JSON string representation of the object
print(ControllerConnectionDetailsList.to_json())

# convert the object into a dict
controller_connection_details_list_dict = controller_connection_details_list_instance.to_dict()
# create an instance of ControllerConnectionDetailsList from a dict
controller_connection_details_list_from_dict = ControllerConnectionDetailsList.from_dict(controller_connection_details_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


