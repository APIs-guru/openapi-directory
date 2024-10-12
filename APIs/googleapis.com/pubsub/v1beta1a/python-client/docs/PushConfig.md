# PushConfig

Configuration for a push delivery endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**push_endpoint** | **str** | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use \&quot;https://example.com/push\&quot;. | [optional] 

## Example

```python
from openapi_client.models.push_config import PushConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PushConfig from a JSON string
push_config_instance = PushConfig.from_json(json)
# print the JSON string representation of the object
print(PushConfig.to_json())

# convert the object into a dict
push_config_dict = push_config_instance.to_dict()
# create an instance of PushConfig from a dict
push_config_from_dict = PushConfig.from_dict(push_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


