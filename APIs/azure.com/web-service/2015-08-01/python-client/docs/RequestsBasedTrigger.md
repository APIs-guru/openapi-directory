# RequestsBasedTrigger

RequestsBasedTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count | [optional] 
**time_interval** | **str** | TimeInterval | [optional] 

## Example

```python
from openapi_client.models.requests_based_trigger import RequestsBasedTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of RequestsBasedTrigger from a JSON string
requests_based_trigger_instance = RequestsBasedTrigger.from_json(json)
# print the JSON string representation of the object
print(RequestsBasedTrigger.to_json())

# convert the object into a dict
requests_based_trigger_dict = requests_based_trigger_instance.to_dict()
# create an instance of RequestsBasedTrigger from a dict
requests_based_trigger_from_dict = RequestsBasedTrigger.from_dict(requests_based_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


