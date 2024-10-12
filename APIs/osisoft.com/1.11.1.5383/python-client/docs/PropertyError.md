# PropertyError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** |  | [optional] 
**message** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.property_error import PropertyError

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyError from a JSON string
property_error_instance = PropertyError.from_json(json)
# print the JSON string representation of the object
print(PropertyError.to_json())

# convert the object into a dict
property_error_dict = property_error_instance.to_dict()
# create an instance of PropertyError from a dict
property_error_from_dict = PropertyError.from_dict(property_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


