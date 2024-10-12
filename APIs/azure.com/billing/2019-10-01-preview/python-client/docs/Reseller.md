# Reseller

Details about a reseller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the reseller. | [optional] [readonly] 
**reseller_id** | **str** | The reseller id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reseller import Reseller

# TODO update the JSON string below
json = "{}"
# create an instance of Reseller from a JSON string
reseller_instance = Reseller.from_json(json)
# print the JSON string representation of the object
print(Reseller.to_json())

# convert the object into a dict
reseller_dict = reseller_instance.to_dict()
# create an instance of Reseller from a dict
reseller_from_dict = Reseller.from_dict(reseller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


