# Time

The time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **int** | The hour. | 
**minutes** | **int** | The minute. | 
**seconds** | **int** | The second. | 

## Example

```python
from openapi_client.models.time import Time

# TODO update the JSON string below
json = "{}"
# create an instance of Time from a JSON string
time_instance = Time.from_json(json)
# print the JSON string representation of the object
print(Time.to_json())

# convert the object into a dict
time_dict = time_instance.to_dict()
# create an instance of Time from a dict
time_from_dict = Time.from_dict(time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


