# Exchanger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ExchangerAttributes**](ExchangerAttributes.md) |  | [optional] 
**id** | **str** | Exchanger&#x60;s ID | [optional] 
**links** | [**SelfLinks**](SelfLinks.md) |  | [optional] 
**relationships** | [**ExchangerRelationships**](ExchangerRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exchanger import Exchanger

# TODO update the JSON string below
json = "{}"
# create an instance of Exchanger from a JSON string
exchanger_instance = Exchanger.from_json(json)
# print the JSON string representation of the object
print(Exchanger.to_json())

# convert the object into a dict
exchanger_dict = exchanger_instance.to_dict()
# create an instance of Exchanger from a dict
exchanger_from_dict = Exchanger.from_dict(exchanger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


