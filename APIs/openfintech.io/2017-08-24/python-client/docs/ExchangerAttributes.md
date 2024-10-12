# ExchangerAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Exchanger&#x60;s name | [optional] 
**rates_export_standard** | **str** |  | [optional] 
**rates_export_url** | **str** |  | [optional] 
**status** | **str** | Exchanger&#x60;s status [active, blocked, deleted] | [optional] 
**wmid** | **int** | Exchanger&#x60;s WebMoney ID | [optional] 

## Example

```python
from openapi_client.models.exchanger_attributes import ExchangerAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangerAttributes from a JSON string
exchanger_attributes_instance = ExchangerAttributes.from_json(json)
# print the JSON string representation of the object
print(ExchangerAttributes.to_json())

# convert the object into a dict
exchanger_attributes_dict = exchanger_attributes_instance.to_dict()
# create an instance of ExchangerAttributes from a dict
exchanger_attributes_from_dict = ExchangerAttributes.from_dict(exchanger_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


