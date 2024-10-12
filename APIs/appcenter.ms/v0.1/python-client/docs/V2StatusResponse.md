# V2StatusResponse

status response object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 

## Example

```python
from openapi_client.models.v2_status_response import V2StatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2StatusResponse from a JSON string
v2_status_response_instance = V2StatusResponse.from_json(json)
# print the JSON string representation of the object
print(V2StatusResponse.to_json())

# convert the object into a dict
v2_status_response_dict = v2_status_response_instance.to_dict()
# create an instance of V2StatusResponse from a dict
v2_status_response_from_dict = V2StatusResponse.from_dict(v2_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


