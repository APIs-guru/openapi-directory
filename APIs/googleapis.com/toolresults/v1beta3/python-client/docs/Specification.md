# Specification

The details about how to run the execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_test** | [**AndroidTest**](AndroidTest.md) |  | [optional] 
**ios_test** | [**IosTest**](IosTest.md) |  | [optional] 

## Example

```python
from openapi_client.models.specification import Specification

# TODO update the JSON string below
json = "{}"
# create an instance of Specification from a JSON string
specification_instance = Specification.from_json(json)
# print the JSON string representation of the object
print(Specification.to_json())

# convert the object into a dict
specification_dict = specification_instance.to_dict()
# create an instance of Specification from a dict
specification_from_dict = Specification.from_dict(specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


