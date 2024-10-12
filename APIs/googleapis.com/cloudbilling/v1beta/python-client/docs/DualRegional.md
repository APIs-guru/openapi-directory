# DualRegional

Area contains dual locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: \&quot;asia1\&quot; for dual region. | [optional] 

## Example

```python
from openapi_client.models.dual_regional import DualRegional

# TODO update the JSON string below
json = "{}"
# create an instance of DualRegional from a JSON string
dual_regional_instance = DualRegional.from_json(json)
# print the JSON string representation of the object
print(DualRegional.to_json())

# convert the object into a dict
dual_regional_dict = dual_regional_instance.to_dict()
# create an instance of DualRegional from a dict
dual_regional_from_dict = DualRegional.from_dict(dual_regional_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


