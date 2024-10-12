# MultiAbi

Represents a list of apis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abi** | [**List[Abi]**](Abi.md) | A list of targeted ABIs, as represented by the Android Platform | [optional] 

## Example

```python
from openapi_client.models.multi_abi import MultiAbi

# TODO update the JSON string below
json = "{}"
# create an instance of MultiAbi from a JSON string
multi_abi_instance = MultiAbi.from_json(json)
# print the JSON string representation of the object
print(MultiAbi.to_json())

# convert the object into a dict
multi_abi_dict = multi_abi_instance.to_dict()
# create an instance of MultiAbi from a dict
multi_abi_from_dict = MultiAbi.from_dict(multi_abi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


