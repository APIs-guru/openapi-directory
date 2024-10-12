# AllocateInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unused_arguments** | **List[str]** | A list of label keys that were unused by the server in processing the request. Thus, for similar requests repeated in a certain future time window, the caller can choose to ignore these labels in the requests to achieve better client-side cache hits and quota aggregation for rate quota. This field is not populated for allocation quota checks. | [optional] 

## Example

```python
from openapi_client.models.allocate_info import AllocateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AllocateInfo from a JSON string
allocate_info_instance = AllocateInfo.from_json(json)
# print the JSON string representation of the object
print(AllocateInfo.to_json())

# convert the object into a dict
allocate_info_dict = allocate_info_instance.to_dict()
# create an instance of AllocateInfo from a dict
allocate_info_from_dict = AllocateInfo.from_dict(allocate_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


