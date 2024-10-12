# BaselineResponse

The response to a baseline query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the metric baseline Id. | [optional] [readonly] 
**name** | [**LocalizableString**](LocalizableString.md) |  | [optional] 
**properties** | [**BaselineProperties**](BaselineProperties.md) |  | [optional] 
**type** | **str** | the resource type of the baseline resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.baseline_response import BaselineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BaselineResponse from a JSON string
baseline_response_instance = BaselineResponse.from_json(json)
# print the JSON string representation of the object
print(BaselineResponse.to_json())

# convert the object into a dict
baseline_response_dict = baseline_response_instance.to_dict()
# create an instance of BaselineResponse from a dict
baseline_response_from_dict = BaselineResponse.from_dict(baseline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


