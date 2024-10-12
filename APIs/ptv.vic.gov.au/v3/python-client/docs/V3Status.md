# V3Status


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health** | **int** | API system health status (0&#x3D;offline, 1&#x3D;online) | [optional] 
**version** | **str** | API Version number | [optional] 

## Example

```python
from openapi_client.models.v3_status import V3Status

# TODO update the JSON string below
json = "{}"
# create an instance of V3Status from a JSON string
v3_status_instance = V3Status.from_json(json)
# print the JSON string representation of the object
print(V3Status.to_json())

# convert the object into a dict
v3_status_dict = v3_status_instance.to_dict()
# create an instance of V3Status from a dict
v3_status_from_dict = V3Status.from_dict(v3_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


