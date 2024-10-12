# Repowerrequest1Wrapper

Contains the details of the repower request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repower_request** | [**Repowerrequest1**](Repowerrequest1.md) |  | [optional] 

## Example

```python
from openapi_client.models.repowerrequest1_wrapper import Repowerrequest1Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of Repowerrequest1Wrapper from a JSON string
repowerrequest1_wrapper_instance = Repowerrequest1Wrapper.from_json(json)
# print the JSON string representation of the object
print(Repowerrequest1Wrapper.to_json())

# convert the object into a dict
repowerrequest1_wrapper_dict = repowerrequest1_wrapper_instance.to_dict()
# create an instance of Repowerrequest1Wrapper from a dict
repowerrequest1_wrapper_from_dict = Repowerrequest1Wrapper.from_dict(repowerrequest1_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


