# ApiHealthConnectors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Connector name | 
**status** | **str** | Overall connect platform availability status | 
**status_message** | **str** | Additional informational message | [optional] 

## Example

```python
from openapi_client.models.api_health_connectors import ApiHealthConnectors

# TODO update the JSON string below
json = "{}"
# create an instance of ApiHealthConnectors from a JSON string
api_health_connectors_instance = ApiHealthConnectors.from_json(json)
# print the JSON string representation of the object
print(ApiHealthConnectors.to_json())

# convert the object into a dict
api_health_connectors_dict = api_health_connectors_instance.to_dict()
# create an instance of ApiHealthConnectors from a dict
api_health_connectors_from_dict = ApiHealthConnectors.from_dict(api_health_connectors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


