# ApiHealth

API Healt response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectors** | [**List[ApiHealthConnectors]**](ApiHealthConnectors.md) | Connector availability | [optional] 
**status** | **str** | Overall connect platform availability status | 
**status_message** | **str** | Additional informational message | [optional] 

## Example

```python
from openapi_client.models.api_health import ApiHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ApiHealth from a JSON string
api_health_instance = ApiHealth.from_json(json)
# print the JSON string representation of the object
print(ApiHealth.to_json())

# convert the object into a dict
api_health_dict = api_health_instance.to_dict()
# create an instance of ApiHealth from a dict
api_health_from_dict = ApiHealth.from_dict(api_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


