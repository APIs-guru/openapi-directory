# MultiRegional

Area contains multiple locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: \&quot;us\&quot; for multi-region. | [optional] 

## Example

```python
from openapi_client.models.multi_regional import MultiRegional

# TODO update the JSON string below
json = "{}"
# create an instance of MultiRegional from a JSON string
multi_regional_instance = MultiRegional.from_json(json)
# print the JSON string representation of the object
print(MultiRegional.to_json())

# convert the object into a dict
multi_regional_dict = multi_regional_instance.to_dict()
# create an instance of MultiRegional from a dict
multi_regional_from_dict = MultiRegional.from_dict(multi_regional_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


