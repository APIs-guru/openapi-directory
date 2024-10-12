# To

The single or mixed collection of endpoint types you connected to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.to import To

# TODO update the JSON string below
json = "{}"
# create an instance of To from a JSON string
to_instance = To.from_json(json)
# print the JSON string representation of the object
print(To.to_json())

# convert the object into a dict
to_dict = to_instance.to_dict()
# create an instance of To from a dict
to_from_dict = To.from_dict(to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


