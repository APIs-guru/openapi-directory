# Liveness

Specifies the contents of a check liveness response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Liveness interval end time. | 
**live** | **bool** | &#x60;true&#x60; if the resource is live during [startTime, endTime], &#x60;false&#x60; otherwise | 
**start_time** | **datetime** | Liveness interval start time. | 

## Example

```python
from openapi_client.models.liveness import Liveness

# TODO update the JSON string below
json = "{}"
# create an instance of Liveness from a JSON string
liveness_instance = Liveness.from_json(json)
# print the JSON string representation of the object
print(Liveness.to_json())

# convert the object into a dict
liveness_dict = liveness_instance.to_dict()
# create an instance of Liveness from a dict
liveness_from_dict = Liveness.from_dict(liveness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


