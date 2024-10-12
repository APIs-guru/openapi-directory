# HttpsTrigger

Describes HttpsTrigger, could be used to connect web hooks to function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_level** | **str** | The security level for the function. | [optional] 
**url** | **str** | Output only. The deployed url for the function. | [optional] [readonly] 

## Example

```python
from openapi_client.models.https_trigger import HttpsTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of HttpsTrigger from a JSON string
https_trigger_instance = HttpsTrigger.from_json(json)
# print the JSON string representation of the object
print(HttpsTrigger.to_json())

# convert the object into a dict
https_trigger_dict = https_trigger_instance.to_dict()
# create an instance of HttpsTrigger from a dict
https_trigger_from_dict = HttpsTrigger.from_dict(https_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


