# ReserveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chargestation** | **str** |  | [optional] 
**connector** | **str** |  | [optional] 
**driver** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reserve_request import ReserveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReserveRequest from a JSON string
reserve_request_instance = ReserveRequest.from_json(json)
# print the JSON string representation of the object
print(ReserveRequest.to_json())

# convert the object into a dict
reserve_request_dict = reserve_request_instance.to_dict()
# create an instance of ReserveRequest from a dict
reserve_request_from_dict = ReserveRequest.from_dict(reserve_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


