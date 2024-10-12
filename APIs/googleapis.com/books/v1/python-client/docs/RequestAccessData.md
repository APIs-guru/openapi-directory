# RequestAccessData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_access** | [**ConcurrentAccessRestriction**](ConcurrentAccessRestriction.md) |  | [optional] 
**download_access** | [**DownloadAccessRestriction**](DownloadAccessRestriction.md) |  | [optional] 
**kind** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.request_access_data import RequestAccessData

# TODO update the JSON string below
json = "{}"
# create an instance of RequestAccessData from a JSON string
request_access_data_instance = RequestAccessData.from_json(json)
# print the JSON string representation of the object
print(RequestAccessData.to_json())

# convert the object into a dict
request_access_data_dict = request_access_data_instance.to_dict()
# create an instance of RequestAccessData from a dict
request_access_data_from_dict = RequestAccessData.from_dict(request_access_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


