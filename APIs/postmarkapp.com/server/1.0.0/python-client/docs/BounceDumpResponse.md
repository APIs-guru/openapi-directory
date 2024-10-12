# BounceDumpResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Raw source of bounce. If no dump is available this will return an empty string. | [optional] 

## Example

```python
from openapi_client.models.bounce_dump_response import BounceDumpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BounceDumpResponse from a JSON string
bounce_dump_response_instance = BounceDumpResponse.from_json(json)
# print the JSON string representation of the object
print(BounceDumpResponse.to_json())

# convert the object into a dict
bounce_dump_response_dict = bounce_dump_response_instance.to_dict()
# create an instance of BounceDumpResponse from a dict
bounce_dump_response_from_dict = BounceDumpResponse.from_dict(bounce_dump_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


