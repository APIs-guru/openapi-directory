# LimitInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The maximum number of calls allowed for the time window | 
**remaining** | **int** | The number of remaining calls in the current window | 
**reset** | **int** | The Unix timestamp of the next window | 

## Example

```python
from openapi_client.models.limit_info import LimitInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LimitInfo from a JSON string
limit_info_instance = LimitInfo.from_json(json)
# print the JSON string representation of the object
print(LimitInfo.to_json())

# convert the object into a dict
limit_info_dict = limit_info_instance.to_dict()
# create an instance of LimitInfo from a dict
limit_info_from_dict = LimitInfo.from_dict(limit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


