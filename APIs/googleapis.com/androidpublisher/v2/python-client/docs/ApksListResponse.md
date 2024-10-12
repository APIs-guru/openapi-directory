# ApksListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apks** | [**List[Apk]**](Apk.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;androidpublisher#apksListResponse\&quot;. | [optional] [default to 'androidpublisher#apksListResponse']

## Example

```python
from openapi_client.models.apks_list_response import ApksListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApksListResponse from a JSON string
apks_list_response_instance = ApksListResponse.from_json(json)
# print the JSON string representation of the object
print(ApksListResponse.to_json())

# convert the object into a dict
apks_list_response_dict = apks_list_response_instance.to_dict()
# create an instance of ApksListResponse from a dict
apks_list_response_from_dict = ApksListResponse.from_dict(apks_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


