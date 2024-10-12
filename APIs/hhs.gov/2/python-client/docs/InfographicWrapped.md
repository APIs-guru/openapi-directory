# InfographicWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Infographic]**](Infographic.md) |  | [optional] 

## Example

```python
from openapi_client.models.infographic_wrapped import InfographicWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of InfographicWrapped from a JSON string
infographic_wrapped_instance = InfographicWrapped.from_json(json)
# print the JSON string representation of the object
print(InfographicWrapped.to_json())

# convert the object into a dict
infographic_wrapped_dict = infographic_wrapped_instance.to_dict()
# create an instance of InfographicWrapped from a dict
infographic_wrapped_from_dict = InfographicWrapped.from_dict(infographic_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


