# Totals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_clicks** | **str** |  | [optional] 
**total_cpc** | **str** |  | [optional] 
**total_ctr** | **str** |  | [optional] 
**total_earnings** | **str** |  | [optional] 
**total_impressions** | **str** |  | [optional] 
**total_net_ecpm** | **str** |  | [optional] 
**total_rpm** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.totals import Totals

# TODO update the JSON string below
json = "{}"
# create an instance of Totals from a JSON string
totals_instance = Totals.from_json(json)
# print the JSON string representation of the object
print(Totals.to_json())

# convert the object into a dict
totals_dict = totals_instance.to_dict()
# create an instance of Totals from a dict
totals_from_dict = Totals.from_dict(totals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


