# Rea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capital** | **float** | The captial for the company. | [optional] 
**identifier** | **str** | The identifier. | [optional] 
**liquidation_status** | **str** | The liquidation status of the company. | [optional] 
**partners** | **str** | The number of partners. | [optional] 
**province** | **str** | The provincia of the ufficio that issued the identifier. | [optional] 

## Example

```python
from openapi_client.models.rea import Rea

# TODO update the JSON string below
json = "{}"
# create an instance of Rea from a JSON string
rea_instance = Rea.from_json(json)
# print the JSON string representation of the object
print(Rea.to_json())

# convert the object into a dict
rea_dict = rea_instance.to_dict()
# create an instance of Rea from a dict
rea_from_dict = Rea.from_dict(rea_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


