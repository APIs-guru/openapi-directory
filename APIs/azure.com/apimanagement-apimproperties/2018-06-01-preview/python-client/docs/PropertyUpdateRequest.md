# PropertyUpdateRequest

Property update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PropertyUpdateRequestProperties**](PropertyUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_update_request import PropertyUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyUpdateRequest from a JSON string
property_update_request_instance = PropertyUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(PropertyUpdateRequest.to_json())

# convert the object into a dict
property_update_request_dict = property_update_request_instance.to_dict()
# create an instance of PropertyUpdateRequest from a dict
property_update_request_from_dict = PropertyUpdateRequest.from_dict(property_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


