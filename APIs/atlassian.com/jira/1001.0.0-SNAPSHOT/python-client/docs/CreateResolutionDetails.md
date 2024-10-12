# CreateResolutionDetails

Details of an issue resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the resolution. | [optional] 
**name** | **str** | The name of the resolution. Must be unique (case-insensitive). | 

## Example

```python
from openapi_client.models.create_resolution_details import CreateResolutionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateResolutionDetails from a JSON string
create_resolution_details_instance = CreateResolutionDetails.from_json(json)
# print the JSON string representation of the object
print(CreateResolutionDetails.to_json())

# convert the object into a dict
create_resolution_details_dict = create_resolution_details_instance.to_dict()
# create an instance of CreateResolutionDetails from a dict
create_resolution_details_from_dict = CreateResolutionDetails.from_dict(create_resolution_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


