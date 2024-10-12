# Guaranteed

Guaranteed tier definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_duration** | **str** | Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration. | [optional] 

## Example

```python
from openapi_client.models.guaranteed import Guaranteed

# TODO update the JSON string below
json = "{}"
# create an instance of Guaranteed from a JSON string
guaranteed_instance = Guaranteed.from_json(json)
# print the JSON string representation of the object
print(Guaranteed.to_json())

# convert the object into a dict
guaranteed_dict = guaranteed_instance.to_dict()
# create an instance of Guaranteed from a dict
guaranteed_from_dict = Guaranteed.from_dict(guaranteed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


