# HealthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checks** | **Dict[str, Dict[str, str]]** | The \&quot;checks\&quot; object MAY have a number of unique keys, one for each logical downstream dependency or sub-component.  Since each sub-component may be backed by several nodes with varying health statuses, these keys point to arrays of objects. In case of a single-node sub-component (or if presence of nodes is not relevant), a single-element array SHOULD be used as the value, for consistency.  Please see https://tools.ietf.org/id/draft-inadarei-api-health-check-04.html#the-checks-object for details. | [optional] 
**description** | **str** | A human-friendly description of the service. | [optional] 
**links** | **Dict[str, str]** | Is an object containing link relations and URIs [RFC3986] for external links that MAY contain more information about the health of the endpoint. | [optional] 
**notes** | **List[str]** | Array of notes relevant to current state of health. | [optional] 
**output** | **str** | Raw error output, in case of \&quot;fail\&quot; or \&quot;warn\&quot; states. | [optional] 
**release_id** | **str** | Release version of the api implementation.  | [optional] 
**service_id** | **str** | A unique identifier of the service, in the application scope. | [optional] 
**status** | **str** | status indicates whether the service status is acceptable or not. | 
**version** | **str** | Public version of the service.  | [optional] 

## Example

```python
from openapi_client.models.health_response import HealthResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HealthResponse from a JSON string
health_response_instance = HealthResponse.from_json(json)
# print the JSON string representation of the object
print(HealthResponse.to_json())

# convert the object into a dict
health_response_dict = health_response_instance.to_dict()
# create an instance of HealthResponse from a dict
health_response_from_dict = HealthResponse.from_dict(health_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


