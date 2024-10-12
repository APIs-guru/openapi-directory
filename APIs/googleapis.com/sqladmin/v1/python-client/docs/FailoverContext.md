# FailoverContext

Database instance failover context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#failoverContext&#x60;. | [optional] 
**settings_version** | **str** | The current settings version of this instance. Request will be rejected if this version doesn&#39;t match the current settings version. | [optional] 

## Example

```python
from openapi_client.models.failover_context import FailoverContext

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverContext from a JSON string
failover_context_instance = FailoverContext.from_json(json)
# print the JSON string representation of the object
print(FailoverContext.to_json())

# convert the object into a dict
failover_context_dict = failover_context_instance.to_dict()
# create an instance of FailoverContext from a dict
failover_context_from_dict = FailoverContext.from_dict(failover_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


