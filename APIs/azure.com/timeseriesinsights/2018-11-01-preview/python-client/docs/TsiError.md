# TsiError

Information about an API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TsiErrorBody**](TsiErrorBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.tsi_error import TsiError

# TODO update the JSON string below
json = "{}"
# create an instance of TsiError from a JSON string
tsi_error_instance = TsiError.from_json(json)
# print the JSON string representation of the object
print(TsiError.to_json())

# convert the object into a dict
tsi_error_dict = tsi_error_instance.to_dict()
# create an instance of TsiError from a dict
tsi_error_from_dict = TsiError.from_dict(tsi_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


