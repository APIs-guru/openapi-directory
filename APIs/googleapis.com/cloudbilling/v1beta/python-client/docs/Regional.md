# Regional

Area contains only one location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The [location name](https://cloud.google.com/storage/docs/locations#available-locations). For example: \&quot;us-central1\&quot; for region. | [optional] 

## Example

```python
from openapi_client.models.regional import Regional

# TODO update the JSON string below
json = "{}"
# create an instance of Regional from a JSON string
regional_instance = Regional.from_json(json)
# print the JSON string representation of the object
print(Regional.to_json())

# convert the object into a dict
regional_dict = regional_instance.to_dict()
# create an instance of Regional from a dict
regional_from_dict = Regional.from_dict(regional_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


