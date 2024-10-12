# RestMethodResponse

The schema for the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref** | **str** | Schema ID for the response schema. | [optional] 

## Example

```python
from openapi_client.models.rest_method_response import RestMethodResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodResponse from a JSON string
rest_method_response_instance = RestMethodResponse.from_json(json)
# print the JSON string representation of the object
print(RestMethodResponse.to_json())

# convert the object into a dict
rest_method_response_dict = rest_method_response_instance.to_dict()
# create an instance of RestMethodResponse from a dict
rest_method_response_from_dict = RestMethodResponse.from_dict(rest_method_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


