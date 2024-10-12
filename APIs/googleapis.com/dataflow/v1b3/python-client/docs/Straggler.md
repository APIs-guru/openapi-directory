# Straggler

Information for a straggler.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_straggler** | [**StragglerInfo**](StragglerInfo.md) |  | [optional] 
**streaming_straggler** | [**StreamingStragglerInfo**](StreamingStragglerInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.straggler import Straggler

# TODO update the JSON string below
json = "{}"
# create an instance of Straggler from a JSON string
straggler_instance = Straggler.from_json(json)
# print the JSON string representation of the object
print(Straggler.to_json())

# convert the object into a dict
straggler_dict = straggler_instance.to_dict()
# create an instance of Straggler from a dict
straggler_from_dict = Straggler.from_dict(straggler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


