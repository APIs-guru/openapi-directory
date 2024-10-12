# Target

A Target is where an HTTP call will be forwarded in the end from a service domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port | 
**scheme** | **str** | The protocol used for communication. Can be http or https | 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


