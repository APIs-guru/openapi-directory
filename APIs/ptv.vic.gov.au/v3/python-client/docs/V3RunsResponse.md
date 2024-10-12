# V3RunsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | [**List[V3Run]**](V3Run.md) | Individual trips/services of a route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_runs_response import V3RunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3RunsResponse from a JSON string
v3_runs_response_instance = V3RunsResponse.from_json(json)
# print the JSON string representation of the object
print(V3RunsResponse.to_json())

# convert the object into a dict
v3_runs_response_dict = v3_runs_response_instance.to_dict()
# create an instance of V3RunsResponse from a dict
v3_runs_response_from_dict = V3RunsResponse.from_dict(v3_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


