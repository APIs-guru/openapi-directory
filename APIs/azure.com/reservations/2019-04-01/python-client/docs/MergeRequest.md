# MergeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MergeProperties**](MergeProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.merge_request import MergeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeRequest from a JSON string
merge_request_instance = MergeRequest.from_json(json)
# print the JSON string representation of the object
print(MergeRequest.to_json())

# convert the object into a dict
merge_request_dict = merge_request_instance.to_dict()
# create an instance of MergeRequest from a dict
merge_request_from_dict = MergeRequest.from_dict(merge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


