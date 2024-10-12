# SDKInfo

SDK Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Required. The SDK Language. | [optional] 
**version** | **str** | Optional. The SDK version. | [optional] 

## Example

```python
from openapi_client.models.sdk_info import SDKInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SDKInfo from a JSON string
sdk_info_instance = SDKInfo.from_json(json)
# print the JSON string representation of the object
print(SDKInfo.to_json())

# convert the object into a dict
sdk_info_dict = sdk_info_instance.to_dict()
# create an instance of SDKInfo from a dict
sdk_info_from_dict = SDKInfo.from_dict(sdk_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


