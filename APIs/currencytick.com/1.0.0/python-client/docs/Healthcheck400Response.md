# Healthcheck400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of this API (&#x60;up&#x60; or &#x60;down&#x60;). | [optional] 

## Example

```python
from openapi_client.models.healthcheck400_response import Healthcheck400Response

# TODO update the JSON string below
json = "{}"
# create an instance of Healthcheck400Response from a JSON string
healthcheck400_response_instance = Healthcheck400Response.from_json(json)
# print the JSON string representation of the object
print(Healthcheck400Response.to_json())

# convert the object into a dict
healthcheck400_response_dict = healthcheck400_response_instance.to_dict()
# create an instance of Healthcheck400Response from a dict
healthcheck400_response_from_dict = Healthcheck400Response.from_dict(healthcheck400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


