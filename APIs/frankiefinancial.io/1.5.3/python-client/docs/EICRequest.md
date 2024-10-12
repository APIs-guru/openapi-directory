# EICRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | Correlation ID as passed to comparison request | 
**details** | [**EICDetails**](EICDetails.md) |  | [optional] 
**plan_id** | **str** | Unique ID of plan, selected from comparison results | 

## Example

```python
from openapi_client.models.eic_request import EICRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EICRequest from a JSON string
eic_request_instance = EICRequest.from_json(json)
# print the JSON string representation of the object
print(EICRequest.to_json())

# convert the object into a dict
eic_request_dict = eic_request_instance.to_dict()
# create an instance of EICRequest from a dict
eic_request_from_dict = EICRequest.from_dict(eic_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


