# BuildUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BuildUpdateRequestDataAttributes**](BuildUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**BuildUpdateRequestDataRelationships**](BuildUpdateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_update_request_data import BuildUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BuildUpdateRequestData from a JSON string
build_update_request_data_instance = BuildUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BuildUpdateRequestData.to_json())

# convert the object into a dict
build_update_request_data_dict = build_update_request_data_instance.to_dict()
# create an instance of BuildUpdateRequestData from a dict
build_update_request_data_from_dict = BuildUpdateRequestData.from_dict(build_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


