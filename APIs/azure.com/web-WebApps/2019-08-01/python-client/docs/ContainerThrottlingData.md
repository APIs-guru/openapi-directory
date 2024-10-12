# ContainerThrottlingData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periods** | **int** |  | [optional] 
**throttled_periods** | **int** |  | [optional] 
**throttled_time** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.container_throttling_data import ContainerThrottlingData

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerThrottlingData from a JSON string
container_throttling_data_instance = ContainerThrottlingData.from_json(json)
# print the JSON string representation of the object
print(ContainerThrottlingData.to_json())

# convert the object into a dict
container_throttling_data_dict = container_throttling_data_instance.to_dict()
# create an instance of ContainerThrottlingData from a dict
container_throttling_data_from_dict = ContainerThrottlingData.from_dict(container_throttling_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


