# Detail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Reason code  Code   |  Reason :------|:--------- 1 | cannot serve required skill 2 | cannot be visited within time window 3 | does not fit into any vehicle due to capacity 4 | cannot be assigned due to max distance constraint of vehicles 21 | could not be assigned due to relation constraint 22 | could not be assigned due to allowed vehicle constraint 23 | could not be assigned due to max-time-in-vehicle constraint 24 | driver does not need a break 25 | could not be assigned due to disallowed vehicle constraint 26 | could not be assigned due to max drive time constraint 27 | could not be assigned due to max job constraint 28 | could not be assigned due to max activity constraint 50 | underlying location cannot be accessed over road network by at least one vehicle  | [optional] 
**id** | **str** | Id of unassigned service/shipment | [optional] 
**reason** | **str** | Human readable reason as listed above | [optional] 

## Example

```python
from openapi_client.models.detail import Detail

# TODO update the JSON string below
json = "{}"
# create an instance of Detail from a JSON string
detail_instance = Detail.from_json(json)
# print the JSON string representation of the object
print(Detail.to_json())

# convert the object into a dict
detail_dict = detail_instance.to_dict()
# create an instance of Detail from a dict
detail_from_dict = Detail.from_dict(detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


