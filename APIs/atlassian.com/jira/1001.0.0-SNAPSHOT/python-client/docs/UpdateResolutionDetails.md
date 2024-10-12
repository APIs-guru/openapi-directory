# UpdateResolutionDetails

Details of an issue resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the resolution. | [optional] 
**name** | **str** | The name of the resolution. Must be unique. | 

## Example

```python
from openapi_client.models.update_resolution_details import UpdateResolutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResolutionDetails from a JSON string
update_resolution_details_instance = UpdateResolutionDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateResolutionDetails.to_json())

# convert the object into a dict
update_resolution_details_dict = update_resolution_details_instance.to_dict()
# create an instance of UpdateResolutionDetails from a dict
update_resolution_details_from_dict = UpdateResolutionDetails.from_dict(update_resolution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


