# StatusDetails

A status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the status. | [optional] [readonly] 
**icon_url** | **str** | The URL of the icon used to represent the status. | [optional] [readonly] 
**id** | **str** | The ID of the status. | [optional] [readonly] 
**name** | **str** | The name of the status. | [optional] [readonly] 
**var_self** | **str** | The URL of the status. | [optional] [readonly] 
**status_category** | [**StatusCategory**](StatusCategory.md) | The category assigned to the status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.status_details import StatusDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StatusDetails from a JSON string
status_details_instance = StatusDetails.from_json(json)
# print the JSON string representation of the object
print(StatusDetails.to_json())

# convert the object into a dict
status_details_dict = status_details_instance.to_dict()
# create an instance of StatusDetails from a dict
status_details_from_dict = StatusDetails.from_dict(status_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


