# HealthCheck200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_good** | **bool** | **indicator**: &#x60;true&#x60; signifies health | [optional] 
**capi_ok** | **bool** | **indicator**: &#x60;true&#x60; signifies health | [optional] 
**db_ok** | **bool** | **indicator**: &#x60;true&#x60; signifies health | [optional] 
**memcached_ok** | **bool** | **indicator**: &#x60;true&#x60; signifies health | [optional] 
**message** | **str** | **natural-language description** of any issues regarding the health of the API | [optional] 

## Example

```python
from openapi_client.models.health_check200_response import HealthCheck200Response

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheck200Response from a JSON string
health_check200_response_instance = HealthCheck200Response.from_json(json)
# print the JSON string representation of the object
print(HealthCheck200Response.to_json())

# convert the object into a dict
health_check200_response_dict = health_check200_response_instance.to_dict()
# create an instance of HealthCheck200Response from a dict
health_check200_response_from_dict = HealthCheck200Response.from_dict(health_check200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


