# ListSmimeInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**smime_info** | [**List[SmimeInfo]**](SmimeInfo.md) | List of SmimeInfo. | [optional] 

## Example

```python
from openapi_client.models.list_smime_info_response import ListSmimeInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSmimeInfoResponse from a JSON string
list_smime_info_response_instance = ListSmimeInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ListSmimeInfoResponse.to_json())

# convert the object into a dict
list_smime_info_response_dict = list_smime_info_response_instance.to_dict()
# create an instance of ListSmimeInfoResponse from a dict
list_smime_info_response_from_dict = ListSmimeInfoResponse.from_dict(list_smime_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


