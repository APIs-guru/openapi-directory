# ANR

Additional details for an ANR crash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 

## Example

```python
from openapi_client.models.anr import ANR

# TODO update the JSON string below
json = "{}"
# create an instance of ANR from a JSON string
anr_instance = ANR.from_json(json)
# print the JSON string representation of the object
print(ANR.to_json())

# convert the object into a dict
anr_dict = anr_instance.to_dict()
# create an instance of ANR from a dict
anr_from_dict = ANR.from_dict(anr_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


