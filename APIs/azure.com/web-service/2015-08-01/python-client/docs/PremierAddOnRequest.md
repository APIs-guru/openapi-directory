# PremierAddOnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Geo region resource belongs to e.g. SouthCentralUS, SouthEastAsia | [optional] 
**plan** | [**ArmPlan**](ArmPlan.md) |  | [optional] 
**properties** | **object** |  | [optional] 
**sku** | [**SkuDescription**](SkuDescription.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags associated with resource | [optional] 

## Example

```python
from openapi_client.models.premier_add_on_request import PremierAddOnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PremierAddOnRequest from a JSON string
premier_add_on_request_instance = PremierAddOnRequest.from_json(json)
# print the JSON string representation of the object
print(PremierAddOnRequest.to_json())

# convert the object into a dict
premier_add_on_request_dict = premier_add_on_request_instance.to_dict()
# create an instance of PremierAddOnRequest from a dict
premier_add_on_request_from_dict = PremierAddOnRequest.from_dict(premier_add_on_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


