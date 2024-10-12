# InboundNumbers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total amount of numbers owned by the account | [optional] 
**numbers** | [**List[Ownednumber]**](Ownednumber.md) | A paginated array of numbers and their details | [optional] 

## Example

```python
from openapi_client.models.inbound_numbers import InboundNumbers

# TODO update the JSON string below
json = "{}"
# create an instance of InboundNumbers from a JSON string
inbound_numbers_instance = InboundNumbers.from_json(json)
# print the JSON string representation of the object
print(InboundNumbers.to_json())

# convert the object into a dict
inbound_numbers_dict = inbound_numbers_instance.to_dict()
# create an instance of InboundNumbers from a dict
inbound_numbers_from_dict = InboundNumbers.from_dict(inbound_numbers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


