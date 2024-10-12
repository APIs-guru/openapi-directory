# MethodQuota

The quota information per method in the Content API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The method name, for example &#x60;products.list&#x60;. Method name does not contain version because quota can be shared between different API versions of the same method. | [optional] 
**quota_limit** | **str** | The current quota limit per day, meaning the maximum number of calls for the method. | [optional] 
**quota_usage** | **str** | The current quota usage, meaning the number of calls already made to the method. | [optional] 

## Example

```python
from openapi_client.models.method_quota import MethodQuota

# TODO update the JSON string below
json = "{}"
# create an instance of MethodQuota from a JSON string
method_quota_instance = MethodQuota.from_json(json)
# print the JSON string representation of the object
print(MethodQuota.to_json())

# convert the object into a dict
method_quota_dict = method_quota_instance.to_dict()
# create an instance of MethodQuota from a dict
method_quota_from_dict = MethodQuota.from_dict(method_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


